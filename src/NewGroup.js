import React, {Component} from 'react';
import request from 'request'
import { hashHistory } from 'react-router';
import Header from './common/Header.js'

class NewGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            dateOfActivities: "",
            description: "",
            password: "",
            students: []
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
        let group = this.state;
        group._id = group.name;
        group.students.map((s)=> {
            s.name = s.nameAndSurname.split(" ")[0];
            s.surname = s.nameAndSurname.split(" ")[1];
            return s;
        });
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
            hashHistory.push('/groups')
        })
    }

    render() {
        return (
            <div>
                <Header title={`Dodaj grupę`} subtitle={``}/>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nazwa grupy</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   onChange={this.handleInputChange}
                                   value={this.state.name}
                                   placeholder="Nazwa grupy"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Hasło dla studentów</label>
                            <input type="text"
                                   className="form-control"
                                   id="password"
                                   name="password"
                                   onChange={this.handleInputChange}
                                   value={this.state.password}
                                   placeholder="Hasło dla studentów"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateOfActivities">Termin zajęć</label>
                            <input type="text"
                                   className="form-control"
                                   name="dateOfActivities"
                                   id="dateOfActivities"
                                   onChange={this.handleInputChange}
                                   value={this.state.dateOfActivities}
                                   placeholder="Termin zajęć"/>
                        </div>


                        <div className="page-header">
                            <h4>Studenci</h4>
                        </div>

                        <StudentsTable students={this.state.students}/>

                        <button type="submit" className="btn btn-sm btn-success">Zapisz</button>
                    </form>
                </div>
            </div>
        )
    }
}


class StudentsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: props.students
        };
        this.addStudent = this.addStudent.bind(this);
    }

    addStudent(e) {
        e.preventDefault();
        const students = this.state.students;
        students.push({name: "", surname: "", id: students.length, nameAndSurname: ""});
        this.setState({
            students: students
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Imię i nazwisko</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th colSpan="3">
                                    <button type="button" className="btn btn-sm btn-success" onClick={this.addStudent}>
                                        Dodaj studenta
                                    </button>
                                </th>
                            </tr>
                            </tfoot>
                            <tbody>
                            {this.state.students.map((student, idx) => (
                                <Student key={idx} students={this.state.students} student={student} idx={idx}/>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: props.students,
            student: props.student,
            idx: props.idx
        };
        this.handleChangeFactory = this.handleChangeFactory.bind(this);
    }

    handleChangeFactory(index, field) {
        var that = this;
        return function (e) {
            e.preventDefault();
            const students = that.state.students;
            students[index][field] = e.target.value;
            that.setState({
                students: students
            })
        }
    }

    render() {
        return (
            <tr>
                <td>{this.state.student.id + 1}</td>
                <td><input type="text"
                           className="form-control"
                           onChange={this.handleChangeFactory(this.state.idx, 'nameAndSurname')}
                           placeholder="Imię i nazwisko"/></td>
            </tr>
        )
    }
}


export default NewGroup