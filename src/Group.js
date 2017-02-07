import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router'
import request from 'request'
import Header from './common/Header.js'


class TestResultRenderer extends Component {

    failed(marks) {
        let arrayMarks = this.marksToArray(marks, TestResultRenderer.rawMarkValue);
        let sum = arrayMarks.reduce((a, b)=> {
            return a + b
        });
        return (sum / arrayMarks.length < 3.0) && arrayMarks[arrayMarks.length - 1] < 3;
    }

    componentWillReceiveProps(props) {
        let that = this;
        this.setState({
            row: props.row,
            failed: that.failed(props.row.marks),
            studentId: props.studentId,
            columnId: props.columnId,
            group: props.group
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            row: props.row,
            failed: false,
            studentId: props.studentId,
            columnId: props.columnId,
            group: props.group
        }
    }

    renderMarks(marks, studentId, columnId) {
        let res = this.marksToArray(marks, this.renderMarkFactory(studentId, columnId));
        return res.map((e, i) => {
            if (TestResultRenderer.isNumeric(e) && res[i + 1] != null) {
                return e + "/"
            }
            return e;
        });
    }

    static isNumeric(n) {
        return !isNaN(parseFloat(n));
    }

    renderMarkFactory(studentId, columnId) {
        let markNames = ['first', 'second', 'third'];

        return (marks, mark, i)=> {
            let prevMark = marks[markNames[i - 1]];
            let rawValue = TestResultRenderer.rawMarkValue(marks, mark);
            if (rawValue === 0) {
                return this.renderSelect(studentId, columnId, mark)
            }
            if (prevMark === "2.0" && rawValue == null) {
                return this.renderSelect(studentId, columnId, mark)
            }
            return rawValue;
        }
    }

    renderSelect(studentId, columnId, mark) {
        let id = studentId + "_" + columnId + "_" + mark;
        return <select key={id} onChange={this.changeMark(studentId,columnId,mark)}>
            <option value="0">0</option>
            <option value="2.0">2.0</option>
            <option value="3.0">3.0</option>
            <option value="3.5">3.5</option>
            <option value="4.0">4.0</option>
            <option value="4.5">4.5</option>
            <option value="5.0">5.0</option>
        </select>
    }

    changeMark(studentId, columnId, mark) {
        return (e)=> {
            let group = this.state.group;
            group.students[studentId]['tests'][columnId]['marks'][mark] = e.target.value;
            request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
                this.setState({
                    group: group
                });
            });
        }
    }

    marksToArray(marks, cb) {
        return ['first', 'second', 'third'].map((mark, i)=> {
            return cb(marks, mark, i)
        }).filter(m => m !== null);
    }

    static rawMarkValue(marks, mark) {
        let value = marks[mark];
        if (value !== null && value !== undefined) {
            return parseFloat(value)
        }
        return null
    }

    render() {
        return (
            <td className={this.failed(this.state.row.marks) ? 'danger':'success'}>
                {this.renderMarks(this.state.row.marks, this.props.studentId, this.props.columnId)}
            </td>
        )
    }
}


class AttendanceRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: props.row,
            studentId: props.studentId,
            columnId: props.columnId,
            group: props.group
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            row: props.row,
            studentId: props.studentId,
            columnId: props.columnId,
            group: props.group
        })
    }


    renderAttendance(status, studentId, columnId) {
        switch (status) {
            case 'present':
                return "+";
            case 'absent':
                return <select onChange={this.justifyStudent(studentId,columnId)}>
                    <option value="absent">-</option>
                    <option value="justified">(+)</option>
                </select>;
            case 'justified':
                return "(+)";
            default:
                return "";
        }
    }

    justifyStudent(studentId, columnId) {
        return (e) => {
            let group = this.state.group;
            group.students[studentId]['attendances'][columnId].status = e.target.value;
            request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
                this.setState({
                    group: group
                });
            });

        };
    }

    render() {
        return (
            <td>{this.renderAttendance(this.state.row.status, this.props.studentId, this.props.columnId)}</td>
        )
    }
}

class AvgTestCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            average: this.average(props.student)
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            average: this.average(props.student)
        });
    }

    average(student) {
        var tests = student['tests'];
        if (tests.length === 0) return 0;
        let sum = tests
            .map(m => {
                return this.averageOfMarks(m.marks)
            }).reduce((a, b)=> a + b);
        return (sum / tests.length).toFixed(2);
    }

    averageOfMarks(marks) {
        let marksAsArray = ['first', 'second', 'third'].map((mark)=> {
            return parseFloat(marks[mark]);
        }).filter(m => m !== null && m !== undefined && !isNaN(m));
        let sum = marksAsArray.reduce((a, b)=>a + b);
        return (sum / marksAsArray.length);
    }

    render() {
        return (
            <td className={this.state.average > 2.99 ? 'success' : 'danger'}>{this.state.average}</td>
        )

    }
}

class AvgAttendanceCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            averageAttendance: AvgAttendanceCalculator.averageAttendance(props.student)
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            averageAttendance: AvgAttendanceCalculator.averageAttendance(props.student)
        });
    }

    static averageAttendance(student) {
        var attendances = student['attendances'];
        if (attendances.length === 0) return 0;
        var sum = attendances
            .map(a => {
                switch (a.status) {
                    case "present":
                    case "justified":
                        return 1;
                    default :
                        return 0;
                }
            }).reduce((a, b)=> a + b);
        return (sum / attendances.length * 100.0).toFixed(2);
    }

    render() {
        return (
            <td className={this.state.averageAttendance > 50 ? 'success' : 'danger'}>{this.state.averageAttendance}%</td>
        )

    }
}

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
        let newAttendances = this.state.group.students[0].attendances.map(t => {
            return {date: t.date, status: "absent"}
        });
        let newTests = this.state.group.students[0].tests.map(t => {
            return {name: t.date, marks: {first: 0}}
        });
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
            browserHistory.push('/groups/' + group._id);
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

class Group extends Component {

    componentDidMount() {
        var that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/' + that.props.params.groupId, function (err, res, body) {
            let group = JSON.parse(body);
            group.students.forEach(student => {
                if (student.tests === undefined) {
                    student.tests = []
                }
                if (student.attendances === undefined) {
                    student.attendances = []
                }
            });
            let refStudent = group.students[0];

            let attendanceHeaders = refStudent.attendances.map(attendance=> {
                return attendance.date
            });
            let testNames = refStudent.tests.map(test=> {
                return test.name
            });
            let commonHeaders = ["#", "Imię", "Nazwisko"];

            that.setState({
                attendanceHeaders: commonHeaders.concat(attendanceHeaders).concat("[% obecności]"),
                attendances: attendanceHeaders,
                testNames: commonHeaders.concat(testNames).concat("Średnia"),
                tests: testNames,
                group: group
            });
        });
    }

    constructor(props) {
        super(props);
        let group = {
            name: "",
            _id: "",
            dateOfActivities: "",
            students: [
                {
                    id: 1,
                    name: "",
                    surname: "",
                    tests: [],
                    attendances: []
                }
            ]
        };


        let commonHeaders = ["#", "Imię", "Nazwisko"];
        let refStudent = group.students[0];
        let attendanceHeaders = refStudent.attendances.map(attendance=> {
            return attendance.date
        });
        let testNames = refStudent.tests.map(test=> {
            return test.name
        });
        this.state = {
            attendanceHeaders: commonHeaders.concat(attendanceHeaders),
            attendances: attendanceHeaders,
            testNames: commonHeaders.concat(testNames),
            tests: testNames,
            group: group
        }
    }

    render() {
        return (
            <div className="row">
                <Header title={this.state.group.name} subtitle={this.state.group.dateOfActivities}/>

                <div className="col-sm-12">
                    <div className="page-header">
                        <h4>Obecności Twoich minionków</h4>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="table-responsive">
                                <Table headers={this.state.attendanceHeaders}
                                       linkTo='attendances'
                                       linkLabel='Sprawdź obecność'
                                       rows='attendances'
                                       group={this.state.group}
                                       renderer={AttendanceRenderer}
                                       lastColumnRenderer={AvgAttendanceCalculator}
                                    />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="page-header">
                        <h4>Kolokwia Twoich minionków</h4>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="table-responsive">
                                <Table headers={this.state.testNames}
                                       linkTo='tests'
                                       linkLabel='Wprowadź wyniki kolokwiów'
                                       rows='tests'
                                       group={this.state.group}
                                       renderer={TestResultRenderer}
                                       lastColumnRenderer={AvgTestCalculator}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <AddStudentPanel group={this.state.group}/>
                </div>
            </div>
        )
    }
}

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: props.headers,
            linkTo: props.linkTo,
            rows: props.rows,
            group: props.group,
            renderer: props.renderer,
            linkLabel: props.linkLabel,
            lastColumnRenderer: props.lastColumnRenderer
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            headers: props.headers,
            linkTo: props.linkTo,
            rows: props.rows,
            group: props.group,
            renderer: props.renderer,
            linkLabel: props.linkLabel
        })
    }

    removeStudent(studentId) {
        let that = this;
        return (e) => {
            e.preventDefault();
            let students = that.state.group.students.filter(student=>student.id !== studentId);
            let group = that.state.group;
            group.students = students;
            group.students = group.students.map((s, i)=> {
                s.id = i;
                return s
            })
            request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
                browserHistory.push('/groups/' + group._id);
            })
        }

    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    {this.state.headers.map((col, idx) => (
                        <th key={idx}>{col}</th>
                    ))}
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th colSpan={this.state.headers.length}>
                        <Link to={`/groups/${this.state.group._id}/${this.state.linkTo}`}
                              className="btn btn-sm btn-success">{this.state.linkLabel}</Link>
                    </th>
                </tr>
                </tfoot>
                <tbody>
                {this.state.group.students.map((student, idx) => (
                    <tr key={student.id}>
                        <td>
                            <button onClick={this.removeStudent(idx)} className="btn btn-sm btn-danger hidden-sm"><span
                                className="glyphicon glyphicon-minus"></span>
                            </button>
                        </td>
                        <td>{student.name}</td>
                        <td>{student.surname}</td>
                        {student[this.state.rows].map((row, idx) => (
                            <this.state.renderer row={row} studentId={student.id} columnId={idx} key={idx}
                                                 group={this.state.group}/>
                        ))}
                        <this.state.lastColumnRenderer student={student} key={idx}/>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}


export default Group;