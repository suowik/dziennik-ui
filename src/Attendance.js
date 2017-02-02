import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import request from 'request'
import getFormattedDate from './util.js'

class Attendance extends Component {

    componentDidMount() {
        var that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/' + that.props.params.groupId, function (err, res, body) {
            let group = JSON.parse(body);
            group.students.forEach((student)=> {
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
        this.state = {
            date: getFormattedDate(new Date()),
            group: group
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let group = this.state.group;
        group._id = group.name;
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
            browserHistory.push('/groups/' + group.name)
        })
    }

    render() {
        return (
            <div className="row">
                <div className="page-header">
                    <h1>Sprawdzanie obecności - {this.state.group.name}</h1>
                    {this.state.date}
                </div>
                <form onSubmit={this.handleSubmit}>
                    {this.state.group.students.map((student, idx) => (
                        <AttendancePanel key={idx} idx={idx} group={this.state.group}/>
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
        let date = getFormattedDate(new Date());
        let student = group.students[props.idx];
        parent.state = {
            group: group,
            student: student,
            date: date
        };
    }

    handleStatusChangeFactory(idx) {
        var that = this;
        return function (e) {
            e.preventDefault();
            const students = that.state.group.students;
            const group = that.state.group;
            let attendances = students[idx]['attendances'];
            attendances[attendances.length - 1] = {date: that.state.date, status: e.target.value};
            group.students = students;
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