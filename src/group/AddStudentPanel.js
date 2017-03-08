import React, {Component} from 'react';
import { hashHistory } from 'react-router'
import request from 'request'
import Header from '../common/Header.js'

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

        let newAttendances = [];
        let newTests = [];

        if (this.state.group.students[0]) {
            newAttendances = this.state.group.students[0].attendances.map(t => {
                return {date: t.date, status: "absent"}
            });
            newTests = this.state.group.students[0].tests.map(t => {
                return {name: t.date, marks: {first: 0}}
            });
        }
        let newStudent = {
            name: this.state.nameAndSurname.split(" ")[0],
            surname: this.state.nameAndSurname.split(" ")[1],
            id: group.students.length,
            tests: newTests,
            attendances: newAttendances
        };
        group.students.push(newStudent);
        group._id = group.name;
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
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