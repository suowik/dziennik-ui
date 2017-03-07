import React, {Component} from 'react';
import request from 'request'
import Header from './common/Header.js'
import AddStudentPanel from './group/AddStudentPanel.js'
import AttendanceRenderer from './group/AttendanceRenderer.js'
import AvgAttendanceCalculator from './group/AvgAttendanceCalculator.js'
import AvgTestCalculator from './group/AvgTestCalculator.js'
import Table from './group/Table.js'
import TestResultRenderer from './group/TestResultRenderer.js'

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
            let commonHeaders = ["#", "lp.","Imię Nazwisko"];

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
            password: "",
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
                <Header title={this.state.group.name} subtitle={this.state.group.dateOfActivities}
                        className=".hidden-print"/>
                <span>Hasło grupy: {this.state.group.password}</span>

                <div className="col-sm-12">
                    <div className="page-header">
                        <h4>Obecności</h4>
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
                        <h4>Kolokwia</h4>
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
                <div className="col-sm-12 hidden-print">
                    <AddStudentPanel group={this.state.group}/>
                </div>
            </div>
        )
    }
}

export default Group;