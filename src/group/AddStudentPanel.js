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
            name: "",
            surname: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let group = this.state.group;

        let newAttendances = [];
        let newTests = [];

        if(this.state.group.students[0]){
            newAttendances = this.state.group.students[0].attendances.map(t => {
                return {date: t.date, status: "absent"}
            });
            newTests = this.state.group.students[0].tests.map(t => {
                return {name: t.date, marks: {first: 0}}
            });
        }
        let newStudent = {
            name: this.state.name,
            surname: this.state.surname,
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
                        <label htmlFor="name">Imię</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               onChange={this.handleInputChange}
                               value={this.state.name}
                               placeholder="Imię"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">Nazwisko</label>
                        <input type="text"
                               className="form-control"
                               id="surname"
                               name="surname"
                               onChange={this.handleInputChange}
                               value={this.state.surname}
                               placeholder="Nazwisko"/>
                    </div>

                    <button type="submit" className="btn btn-sm btn-success">Dodaj studenta</button>
                </form>
            </div>
        )
    }
}

export default AddStudentPanel;