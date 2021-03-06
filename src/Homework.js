import React, {Component} from 'react';
import { hashHistory } from 'react-router'
import request from 'request'
import getFormattedDate from './util.js'
import Header from './common/Header.js'
import {resolveSemester} from './common/resolveSemester.js'
import {REFERENCE_GROUP} from './common/referenceGroup.js'
class Attendance extends Component {

    componentDidMount() {
        let that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/' + that.props.params.groupId, function (err, res, body) {
            let group = JSON.parse(body);
            resolveSemester(group).students.forEach((student)=> {
                if (student.homework === undefined) {
                    student.homework = [{status: '', date: getFormattedDate(new Date())}];
                } else {
                    student.homework.push({status: '', date: getFormattedDate(new Date())})
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
        const requestBody = {
            method: 'POST',
            url: 'https://dziennik-api.herokuapp.com/groups/',
            json: true,
            body: group,
            headers: {
                Authorization: 'Basic zaq12wsxcde34rfvbgt56yhnmju78ik,.lo90p;/'
            }
        };
        request(requestBody,() => {
            hashHistory.push('/groups/' + group._id)
        })
    }

    render() {
        return (
            <div className="row">
                <Header title={`Sprawdzanie zadania domowego - ${this.state.group.name}`} subtitle={this.state.date} />
                <form onSubmit={this.handleSubmit}>
                    {resolveSemester(this.state.group).students.map((student, idx) => (
                        <HomeworkPanel key={idx} idx={idx} group={this.state.group}/>
                    ))}
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-sm btn-success">Zapisz</button>
                    </div>
                </form>
            </div>
        )
    }
}

class HomeworkPanel extends Component {

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
            const semester = resolveSemester(that.state.group);
            const students = semester.students;
            const group = that.state.group;
            let homework = students[idx]['homework'];
            homework[homework.length - 1] = {date: that.state.date, status: e.target.value};
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
                                    <option value=""></option>
                                    <option value="-">-</option>
                                    <option value="+">+</option>
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