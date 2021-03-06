import React, {Component} from 'react';
import {hashHistory} from 'react-router'
import request from 'request'
import getFormattedDate from './util.js'
import Header from './common/Header.js'
import {REFERENCE_GROUP} from './common/referenceGroup.js'
import {resolveSemester} from './common/resolveSemester.js'


class TestResult extends Component {

    componentDidMount() {
        let that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/' + that.props.params.groupId, function (err, res, body) {
            let group = JSON.parse(body);
            let semester = resolveSemester(group);
            semester.students.forEach((student) => {
                if (student.tests === undefined) {
                    student.tests = [{marks: {first: 0}, name: that.state.testName}];
                } else {
                    student.tests.push({marks: {first: 0}, name: that.state.testName})
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
            group: REFERENCE_GROUP,
            testName: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let group = this.state.group;
        let that = this;
        resolveSemester(group).students.map(s => {
            let tests = s.tests;
            let test = tests[tests.length - 1];
            test.name = that.state.testName;
            s.tests[tests.length - 1] = test;
            return s
        });

        const requestBody = {
            method: 'POST',
            url: 'https://dziennik-api.herokuapp.com/groups/',
            json: true,
            body: group,
            headers: {
                Authorization: 'Basic zaq12wsxcde34rfvbgt56yhnmju78ik,.lo90p;/'
            }
        };
        request(requestBody, () => {
            hashHistory.push('/groups/' + group._id)
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="row">
                <Header title={`Wprowadzanie wyników kolokwium - ${this.state.group.name}`}
                        subtitle={this.state.testName}/>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="testName">Nazwa kolokwium:</label>
                        <input type="text"
                               className="form-control"
                               id="testName"
                               name="testName"
                               onChange={this.handleInputChange}
                               value={this.state.testName}
                               placeholder="Nazwa kolokwium"/>
                    </div>
                    {resolveSemester(this.state.group).students.map((student, idx) => (
                        <TestResultPanel key={idx} idx={idx} group={this.state.group} testName={this.state.testName}/>
                    ))}
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-sm btn-success">Zapisz</button>
                    </div>
                </form>
            </div>
        )
    }
}

class TestResultPanel extends Component {

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
        let student = resolveSemester(group).students[props.idx];
        parent.state = {
            group: group,
            student: student,
            testName: props.testName
        };
    }

    handleStatusChangeFactory(idx) {
        let that = this;
        return (e) => {
            e.preventDefault();
            const students = resolveSemester(that.state.group).students;
            const group = that.state.group;
            let tests = students[idx]['tests'];
            tests[tests.length - 1] = {
                name: that.state.testName,
                marks: {first: e.target.value, second: null, third: null}
            };
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
                                    <option value="0">0</option>
                                    <option value="2.0">2.0</option>
                                    <option value="3.0">3.0</option>
                                    <option value="3.5">3.5</option>
                                    <option value="4.0">4.0</option>
                                    <option value="4.5">4.5</option>
                                    <option value="5.0">5.0</option>
                                    <option value="NOT_PASSED">nzal</option>
                                    <option value="PASSED">zal</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestResult