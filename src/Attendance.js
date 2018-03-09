import React, {Component} from 'react';
import {hashHistory} from 'react-router'
import request from 'request'
import getFormattedDate from './util.js'
import Header from './common/Header.js'
import {REFERENCE_GROUP} from './common/referenceGroup.js'
import {resolveSemester} from './common/resolveSemester.js'

class Attendance extends Component {

    componentDidMount() {
        let that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/' + that.props.params.groupId, function (err, res, body) {
            let group = JSON.parse(body);
            let semester = resolveSemester(group);
            semester.students.forEach((student) => {
                if (student.attendances === undefined) {
                    student.attendances = [{status: 'present', date: getFormattedDate(new Date())}];
                } else {
                    student.attendances.push({status: 'present', date: getFormattedDate(new Date())})
                }
            });
            that.setState({
                group: group
            });
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            date: getFormattedDate(new Date()),
            group: REFERENCE_GROUP
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let group = this.state.group;
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, () => {
            hashHistory.push('/groups/' + group._id)
        })
    }

    handleDateChange = (e) => {
        e.preventDefault();
        let raw = e.target.value.split("-");
        this.setState({
            date: raw[2] + "." + raw[1]
        })
    };

    render() {
        return (
            <div className="row">
                <Header title={`Sprawdzanie obecności - ${this.state.group.name}`} subtitle={this.state.date}/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="attendanceDate">Data zajęć:</label>
                        <input type="date"
                               value={this.state.date}
                               id="attendanceDate"
                               onChange={this.handleDateChange}
                               className="form-control"/>
                    </div>
                    {resolveSemester(this.state.group).students.map((student, idx) => (
                        <AttendancePanel key={idx} idx={idx} group={this.state.group} date={this.state.date}/>
                    ))}
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-sm btn-success">Zapisz</button>
                    </div>
                </form>
            </div>
        )
    }
}

class AttendancePanel extends Component {

    constructor(props) {
        super(props);
        this.init(this, props);
        this.handleStatusChangeFactory = this.handleStatusChangeFactory.bind(this);
    }

    componentWillReceiveProps(props) {
        this.init(this, props)
    }

    init(parent, props) {
        let group = props.group;
        let date = props.date;
        let student = resolveSemester(group).students[props.idx];
        parent.state = {
            group: group,
            student: student,
            date: date
        };
    }

    handleStatusChangeFactory(idx) {
        let that = this;
        return function (e) {
            e.preventDefault();
            const students = resolveSemester(that.state.group).students;
            const group = that.state.group;
            const semester = resolveSemester(that.state.group);
            let attendances = students[idx]['attendances'];
            attendances[attendances.length - 1] = {date: that.state.date, status: e.target.value};
            semester.students = students;
            that.setState({
                group: group
            });
        }
    }

    render() {
        return (
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.student.name} {this.state.student.surname}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="radio">
                            <label>
                                <select className="form-control"
                                        onChange={this.handleStatusChangeFactory(this.props.idx)}>
                                    <option value="present">Obecny(a)</option>
                                    <option value="absent">Nieobecny(a)</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Attendance