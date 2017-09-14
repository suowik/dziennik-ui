import React, {Component} from 'react';
import request from 'request'
import {hashHistory} from 'react-router';
import Header from './common/Header.js'
import shortid from 'shortid'

class NewGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            _id: shortid.generate(),
            dateOfActivities: "",
            description: "",
            password: "",
            activeYear: "2017/2018",
            activeSemester: 1,
            semesters: [{year: "2017/2018", semester: 1, students: []}]
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let group = this.state.semesters[0];
        group.students.map((s) => {
            s.name = s.nameAndSurname.split(" ")[0];
            s.surname = s.nameAndSurname.split(" ")[1];
            return s;
        });
        group.year = this.state.activeYear;
        group.semester = this.state.activeSemester;
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(this.state)}, () => {
            hashHistory.push('/groups')
        })
    };

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

                        <div className="form-group">
                            <label htmlFor="activeYear">Rok zajęć (rrrr/rrrr)</label>
                            <input type="text"
                                   className="form-control"
                                   name="activeYear"
                                   id="activeYear"
                                   onChange={this.handleInputChange}
                                   value={this.state.activeYear}
                                   placeholder="Termin zajęć"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="activeSemester">Semestr</label>
                            <select className="form-control"
                                    name="activeSemester"
                                    id="activeSemester"
                                    onChange={this.handleInputChange}
                                    value={this.state.activeSemester}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                            </select>
                        </div>


                        <div className="page-header">
                            <h4>Studenci</h4>
                        </div>

                        <StudentsTable students={this.state.semesters[0].students}/>

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
    }

    addStudent = (e) => {
        e.preventDefault();
        const students = this.state.students;
        students.push({name: "", surname: "", id: students.length, nameAndSurname: ""});
        this.setState({
            students: students
        })
    };

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
        let that = this;
        return (e) => {
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