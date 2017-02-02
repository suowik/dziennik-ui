import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import request from 'request'
import getFormattedDate from './util.js'

class TestResult extends Component {

    componentDidMount() {
        var that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/' + that.props.params.groupId, function (err, res, body) {
            let group = JSON.parse(body);
            group.students.forEach((student)=> {
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
            group: group,
            testName: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let group = this.state.group;
        group._id = group.name;
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
            browserHistory.push('/groups/' + group.name)
        })
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
                <div className="page-header">
                    <h1>Wprowadzanie wyników kolokwium - {this.state.group.name}</h1>
                    {this.state.testName}
                </div>
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
                    {this.state.group.students.map((student, idx) => (
                        <TestResultPanel key={idx} idx={idx} group={this.state.group} testName={this.state.testName} />
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
        let student = group.students[props.idx];
        parent.state = {
            group: group,
            student: student,
            testName: props.testName
        };
    }

    handleStatusChangeFactory(idx) {
        var that = this;
        return function (e) {
            e.preventDefault();
            const students = that.state.group.students;
            const group = that.state.group;
            let tests = students[idx]['tests'];
            tests[tests.length - 1] = {name: that.state.testName, marks: {first: e.target.value, second: null, third: null}};
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