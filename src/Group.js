import React, {Component} from 'react';
import request from 'request'
import Header from './common/Header.js'
import AddStudentPanel from './group/AddStudentPanel.js'
import AttendanceRenderer from './group/AttendanceRenderer.js'
import HomeworkRenderer from './group/HomeworkRenderer.js'
import AvgAttendanceCalculator from './group/AvgAttendanceCalculator.js'
import AvgTestCalculator from './group/AvgTestCalculator.js'
import HomeworkCountRenderer from './group/HomeworkCountRenderer.js'
import Table from './group/Table.js'
import TestResultRenderer from './group/TestResultRenderer.js'
import {Link} from 'react-router'
import {REFERENCE_GROUP} from './common/referenceGroup.js'
import {resolveSemester} from './common/resolveSemester.js'

class Group extends Component {

    componentDidMount() {
        let that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/' + that.props.params.groupId, function (err, res, body) {
            let group = JSON.parse(body);
            let semester = resolveSemester(group);
            semester.students.forEach(student => {
                if (student.tests === undefined) {
                    student.tests = []
                }
                if (student.attendances === undefined) {
                    student.attendances = []
                }
                if (student.homework === undefined) {
                    student.homework = []
                }
            });
            let refStudent = semester.students[0];
            let attendanceHeaders = [];
            let testNames = [];
            let homeworkNames = [];
            if (refStudent) {
                attendanceHeaders = refStudent.attendances.map(attendance => {
                    return attendance.date
                });
                testNames = refStudent.tests.map(test => {
                    return test.name
                });
                homeworkNames = refStudent.homework.map(hw => {
                    return hw.date
                });
            }

            let commonHeaders = ["#", "lp.", "Imię Nazwisko"];

            that.setState({
                attendanceHeaders: commonHeaders.concat(attendanceHeaders).concat("[% obecności]"),
                attendances: attendanceHeaders,
                homeworkHeaders: commonHeaders.concat(homeworkNames).concat(""),
                homework: homeworkNames,
                testNames: commonHeaders.concat(testNames).concat("Średnia"),
                tests: testNames,
                group: group
            });
        });
    }

    constructor(props) {
        super(props);
        let semester = resolveSemester(REFERENCE_GROUP);

        let commonHeaders = ["#", "lp.", "Imię Nazwisko"];
        let refStudent = semester.students[0];
        let attendanceHeaders = refStudent.attendances.map(attendance => {
            return attendance.date
        });
        let homeworkHeaders = refStudent.homework.map(hw => {
            return hw.date
        });
        let testNames = refStudent.tests.map(test => {
            return test.name
        });
        this.state = {
            attendanceHeaders: commonHeaders.concat(attendanceHeaders),
            attendances: attendanceHeaders,
            homeworkHeaders: commonHeaders.concat(homeworkHeaders),
            homework: homeworkHeaders,
            testNames: commonHeaders.concat(testNames),
            tests: testNames,
            group: REFERENCE_GROUP
        }
    }

    render() {
        return (
            <div className="row">
                <Header title={this.state.group.name} subtitle={this.state.group.dateOfActivities}
                        className="hidden-print"/>
                <span className="hidden-print">Hasło grupy: {this.state.group.password}</span>
                <br />
                <div className="btn-group">
                    <Link to={`/groups/${this.state.group._id}/archive`}
                          className="btn btn-default hidden-print">Archiwum</Link>
                    <Link to={`/groups/${this.state.group._id}/promote`}
                          className="btn btn-warning hidden-print">Promuj grupę na następny semestr</Link>
                </div>
                <div className="col-sm-12">
                    <div className="page-header">
                        <h4>Obecności</h4>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="table-responsive">
                                <Table headers={this.state.attendanceHeaders}
                                       type='attendances'
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
                                       type='tests'
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
                    <div className="page-header">
                        <h4>Zadania domowe</h4>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="table-responsive">
                                <Table headers={this.state.homeworkHeaders}
                                       type='homework'
                                       linkLabel='Sprawdź zadania domowe'
                                       rows='homework'
                                       group={this.state.group}
                                       renderer={HomeworkRenderer}
                                       lastColumnRenderer={HomeworkCountRenderer}
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