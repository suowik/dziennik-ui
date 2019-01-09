import React, {Component} from 'react';
import { hashHistory } from 'react-router'
import request from 'request'
import Header from '../common/Header.js'
import {resolveSemester} from '../common/resolveSemester.js'

class AddStudentPanel extends Component {
    componentWillReceiveProps(props) {
        this.setState({
            group: props.group
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            group: props.group,
            nameAndSurname: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        this.setState({
            nameAndSurname: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let group = this.state.group;
        let semester = resolveSemester(group);
        let newAttendances = [];
        let newTests = [];
        let homework = [];
        if (semester.students[0]) {
            newAttendances = semester.students[0].attendances.map(t => {
                return {date: t.date, status: "absent"}
            });
            newTests = semester.students[0].tests.map(t => {
                return {name: t.date, marks: {first: 0}}
            });
            homework = semester.students[0].homework.map(t => {
                return {date: t.date, status:""}
            });
        }
        let newStudent = {
            name: this.state.nameAndSurname.split(" ")[0],
            surname: this.state.nameAndSurname.split(" ")[1],
            id: semester.students.length,
            tests: newTests,
            attendances: newAttendances,
            homework: homework
        };
        semester.students.push(newStudent);
        const requestBody = {
            method: 'POST',
            url: 'https://dziennik-api.herokuapp.com/groups/',
            json: true,
            body: this.state,
            headers: {
                Authorization: 'Basic zaq12wsxcde34rfvbgt56yhnmju78ik,.lo90p;/'
            }
        };
        request(requestBody, () => {
            hashHistory.push('/groups/' + group._id);

        })
    }

    render() {
        return (
            <div className="col-sm-4">
                <Header title="Dodaj studenta" subtitle=""/>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nameAndSurname">Imię i nazwisko</label>
                        <input type="text"
                               className="form-control"
                               id="nameAndSurname"
                               name="nameAndSurname"
                               onChange={this.handleInputChange}
                               value={this.state.nameAndSurname}
                               placeholder="Imię i nazwisko"/>
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Dodaj studenta</button>
                </form>
            </div>
        )
    }
}

export default AddStudentPanel;