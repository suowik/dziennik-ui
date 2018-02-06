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
            if (group.announcements === undefined) {
                group.announcements = []
            }
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
                <br/>
                <div className="btn-group">
                    <Link to={`/groups/${this.state.group._id}/archive`}
                          className="btn btn-default hidden-print">Poprzednie semestry</Link>
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
                    <div className="page-header">
                        <h4>Ogłoszenia</h4>
                    </div>
                    <div className="table-responsive">
                        <Announcements
                            removeHandler={this.removeHandler}
                            announcements={this.state.group.announcements.sort((a, b) => {
                                a = a.date.split('-').reverse().join('');
                                b = b.date.split('-').reverse().join('');
                                return a > b ? 1 : a < b ? -1 : 0;
                            })}/>
                        <AddAnnouncement announcements={this.state.group.announcements}
                                         addAnnouncementHandler={this.addAnnouncement}/>
                    </div>
                </div>

                <div className="col-sm-12 hidden-print">
                    <AddStudentPanel group={this.state.group}/>
                </div>
            </div>
        )
    }

    removeHandler = (index) => {
        let group = this.state.group;
        let announcements = group.announcements;
        announcements.splice(index, 1);
        let that = this;
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, () => {
            that.setState({
                group: group
            })
        })
    };

    addAnnouncement = (announcement) => {
        let group = this.state.group;
        let announcements = group.announcements;
        announcements.push({date: announcement.date, text: announcement.text});
        let that = this;
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, () => {
            that.setState({
                group: group
            })
        })
    }
}

class Announcements extends Component {

    handleRemove = (index) => {
        return (e) => {
            e.preventDefault()
            this.props.removeHandler(index)
        }
    };

    render() {
        return (
            <table className="table table-striped table-condensed">
                <thead>
                <tr>
                    <th>Data</th>
                    <th>Treść</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.props.announcements.map((a, i) =>
                    <tr key={i}>
                        <td>{a.date}</td>
                        <td>{a.text}</td>
                        <td>
                            <button onClick={this.handleRemove(i)} className="btn btn-small btn-danger">-</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}

class AddAnnouncement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            text: e.target.value
        });
    };

    addAnnouncement = (e) => {
        e.preventDefault();
        this.props.addAnnouncementHandler({date: new Date().toISOString().slice(0, 10), text: this.state.text})
        this.setState({
            text: ""
        })
    };

    render() {
        return (
            <form onSubmit={this.addAnnouncement}>
                <div className="form-group">
                    <label htmlFor="text">Treść ogłoszenia</label>
                    <textarea className="form-control" name="text" value={this.state.text}
                              onChange={this.handleChange}> </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Dodaj ogłoszenie</button>
            </form>
        )
    }
}

export default Group;