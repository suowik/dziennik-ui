import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router'
import request from 'request'

class Attendance extends Component {

    getFormattedDate(date) {
        var year = date.getFullYear();
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return day + '/' + month + '/' + year;
    }

    componentDidMount() {
        var that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/' + that.props.params.groupId, function (err, res, body) {
            let group = JSON.parse(body);
            group.students.forEach(student => {
                if (student.attendances === undefined) {
                    student.attendances = [{status: 'present', date: that.getFormattedDate(new Date())}];
                } else {
                    student.attendances.push({status: 'present', date: that.getFormattedDate(new Date())})
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
                    attendances: [{status: 'present', date: this.getFormattedDate(new Date())}]
                }
            ]
        };
        this.state = {
            date: this.getFormattedDate(new Date()),
            group: group
        };
        this.status = this.status.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAttendanceChangeFactory = this.handleAttendanceChangeFactory.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        let group = this.state.group;
        group._id = group.name;
        console.log(group);
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
            browserHistory.push('/groups/' + group.name)
        })
    }

    handleAttendanceChangeFactory(idx) {
        var that = this;
        return function (e) {
            e.preventDefault();
            const students = that.state.group.students;
            const group = that.state.group;
            var attendances = students[idx]['attendances'];
            attendances[attendances.length - 1] = {date: that.state.date, status: e.target.value};
            group.students = students;
            that.setState({
                group: group
            });
        }
    }

    status(idx, status) {
        var attendances = this.state.group.students[idx].attendances;
        return attendances[attendances.length - 1].status === status;
    }

    render() {
        return (
            <div className="row">
                <div className="page-header">
                    <h1>Sprawdzanie obecności - {this.state.group.name}</h1>
                    {this.state.date}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        {this.state.group.students.map((student, idx) => (
                            <div className="col-sm-3" key={idx}>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">{student.name} {student.surname}</h3>
                                    </div>
                                    <div className="panel-body">
                                        {this.status(idx, 'present')}
                                        <div className="radio">
                                            <label>
                                                <select className="form-control"
                                                        onChange={this.handleAttendanceChangeFactory(idx)}>
                                                    <option value="present">Obecny(a)
                                                    </option>
                                                    <option value="absent">Nieobecny(a)
                                                    </option>
                                                </select>

                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-sm btn-success">Zapisz</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Attendance