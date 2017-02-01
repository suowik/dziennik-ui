import React, {Component} from 'react';
import { Link } from 'react-router'
import request from 'request'

class Group extends Component {

    componentDidMount() {
        var that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/' + that.props.params.groupId, function (err, res, body) {
            let group = JSON.parse(body);
            group.students.forEach(student => {
                if (student.tests === undefined) {
                    student.tests = []
                }
                if(student.attendances === undefined){
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
                    name: "Abc",
                    surname: "Abc",
                    tests: [
                        {name: "U1", marks: {first: "4.0"}},
                        {name: "U2", marks: {first: "2.0", second: "4.5"}}
                    ],
                    attendances: [
                        {date: "23.02.2017", status: "present"},
                        {date: "25.02.2017", status: "absent"},
                        {date: "02.03.2017", status: "justified"}
                    ]
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
                                       linkTo='attendance'
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

    componentWillReceiveProps(props){
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
                    {this.state.headers.map(col => (
                        <th key={col}>{col}</th>
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
                            <this.state.renderer row={row} key={idx}/>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}

class AttendanceRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: props.row
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            row: props.row
        })
    }


    attendanceToString(status) {
        switch (status) {
            case 'present':
                return "+";
            case 'absent':
                return "-";
            case 'justified':
                return "(+)";
            default:
                return "";
        }
    }

    render() {
        return (
            <td>{this.attendanceToString(this.state.row.status)}</td>
        )
    }
}

class TestResultRenderer extends Component {

    failed(marks) {
        return marks.first === "2.0" && marks.second === "2.0" && marks.third === "2.0";
    }

    componentWillReceiveProps(props){
        let that = this
        this.setState({
            row: props.row,
            failed: that.failed(props.row.marks)
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            row: props.row,
            failed: false
        }
    }

    marksPresentation(marks) {
        if (marks.first && marks.second && marks.third) {
            return marks.first + "/" + marks.second + "/" + marks.third;
        } else if (marks.first && marks.second) {
            return marks.first + "/" + marks.second;
        } else {
            return marks.first
        }
    }


    render() {
        return (
            <td className={this.state.failed ? 'danger':'success'}>{this.marksPresentation(this.state.row.marks)}</td>
        )
    }
}

export default Group;