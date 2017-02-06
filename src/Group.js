import React, {Component} from 'react';
import { Link } from 'react-router'
import request from 'request'


class TestResultRenderer extends Component {

    failed(marks) {
        let arrayMarks = this.marksToArray(marks, this.rawMarkValue);
        let sum = arrayMarks.reduce((a, b)=> {
            return a + b
        });
        return sum / arrayMarks.length < 3.0;
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
            if (this.isNumeric(e) && res[i + 1] != null) {
                return e + "/"
            }
            return e;
        });
    }

    isNumeric(n) {
        return !isNaN(parseFloat(n));
    }

    renderMarkFactory(studentId, columnId) {
        let markNames = ['first', 'second', 'third'];

        return (marks, mark, i)=> {
            let prevMark = marks[markNames[i - 1]];
            let rawValue = this.rawMarkValue(marks, mark);
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
            console.log(studentId);
            console.log(columnId);
            console.log(mark);
            let group = this.state.group;
            group.students[studentId]['tests'][columnId]['marks'][mark] = e.target.value;
            request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
                console.log(group);
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

    rawMarkValue(marks, mark) {
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
                attendanceHeaders: commonHeaders.concat(attendanceHeaders),
                attendances: attendanceHeaders,
                testNames: commonHeaders.concat(testNames),
                tests: testNames,
                group: group
            });
        });
    }

    constructor(props) {
        super(props);
        let group = {
            name: "test7",
            _id: "test7",
            dateOfActivities: "czw. 10:00 - 11:30",
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
                <div className="page-header">
                    <h1>{this.state.group.name}</h1>
                    <span>{this.state.group.dateOfActivities}</span>
                </div>

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
                                       renderer={AttendanceRenderer}/>
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
                                       renderer={TestResultRenderer}/>
                            </div>
                        </div>
                    </div>
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
            linkLabel: props.linkLabel
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
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.surname}</td>
                        {student[this.state.rows].map((row, idx) => (
                            <this.state.renderer row={row} studentId={student.id} columnId={idx} key={idx}
                                                 group={this.state.group}/>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}


export default Group;