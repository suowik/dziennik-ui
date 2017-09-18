import React, {Component} from 'react'
import request from 'request'
import {REFERENCE_GROUP} from './common/referenceGroup.js'
import Header from './common/Header.js'
import _ from 'lodash'

class Table extends Component {

    render() {
        return (
            <div className="table-responsive">
                <h4>{this.state.title}</h4>
                {`Semestr: ` + this.props.semester}
                <table className="table table-condensed">
                    <thead>
                    <tr>
                        {this.state.headers.map((h, idx) => <th key={idx}>{h}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.students.map(student => {
                        return <tr key={student.id}>
                            <td>{student.id + 1}.</td>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            {student[this.state.field].map((a, i) =>
                                <td key={i}>{this.state.renderer(student, a, i)}</td>)}
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

class AttendancesTable extends Table {
    constructor(props) {
        super(props);
        this.state = {
            headers: ["Lp.", "imię", "nazwisko"].concat(props.students[0].attendances.map(hw => hw.date)),
            title: "Obecności",
            field: "attendances",
            renderer: (student, attendance) => {
                let status = attendance.status;
                switch (status) {
                    case "present":
                        return "+";
                    case "absent":
                        return "-";
                    case "justified":
                        return "(+)";
                    default:
                        return "";
                }
            }
        }
    }

}

class TestsTable extends Table {
    constructor(props) {
        super(props);
        this.state = {
            headers: ["Lp.", "imię", "nazwisko"].concat(props.students[0].tests.map(hw => hw.name)),
            title: "Kolokwia",
            field: "tests",
            renderer: (student, test, index) => {
                let first = test.marks.first || 0;
                let second = test.marks.second || null;
                let third = test.marks.third || null;
                let marks = [first, second, third]
                    .filter(m => m !== null)
                    .map((e, i) => <EditableSelect
                        key={this.props.year + "_" + this.props.semester + "_" + student.id + "_" + i}
                        value={e}
                        handleChange={(markValue) => {
                            this.props.handleChange(this.props.year, this.props.semester, student, index, i, markValue)
                        }}
                        values={["0", "2.0", "3.0", "3.5", "4.0", "4.5", "5.0"]}/>);
                return new Array(marks.length + (marks.length - 1))
                    .fill(1)
                    .map((e, i) => {
                        let index = Math.floor(i / 2);
                        if (i % 2 === 0) {
                            return marks[index]
                        } else {
                            return ' / '
                        }
                    });
            }
        }
    }
}

class EditableField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    render() {
        let Renderer = null;
        if (this.state.editMode) {
            Renderer = this.state.editModeRenderer;
        } else {
            Renderer = this.state.viewModeRenderer;
        }
        return (
            <Renderer value={this.props.value}
                      values={this.props.values}
                      handleChange={(e) => {
                          e.preventDefault();
                          this.props.handleChange(e.target.value);
                          this.setState({
                              editMode: false
                          })
                      }}
                      changeModeHandler={(e) => {
                          e.preventDefault();
                          this.setState({
                              editMode: !this.state.editMode
                          })
                      }}/>
        )
    }
}

class EditableSelect extends EditableField {
    constructor(props) {
        super(props);
        this.state = {
            editModeRenderer: (props) =>
                <select onDoubleClick={props.changeModeHandler}
                        onChange={e => props.handleChange(e)}>
                    {props.values.map(v => <option key={v} value={v}>{v}</option>)}
                </select>,
            viewModeRenderer: (props) => <span onDoubleClick={props.changeModeHandler}>{props.value}</span>
        }
    }
}

export default class Archive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            group: REFERENCE_GROUP
        }
    }

    componentDidMount() {
        let that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/' + this.props.params.groupId, (err, res, body) => {
            that.setState({
                group: JSON.parse(body)
            })
        });
    }

    handleChange = (year, semester, student, testIndex, mark, value) => {
        const marksToNames = ["first", "second", "third"];
        let group = this.state.group;
        let marks = group.semesters
            .filter(s => s.year === year && s.semester === semester)[0]
            .students
            .filter(s => s.id === student.id)[0]
            .tests[testIndex]
            .marks;
        _.set(marks, marksToNames[mark], value);
        let that = this;
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, () => {
            that.setState({
                group: group
            })
        });
    };

    render() {
        return (
            <div>
                <Header title={`Archiwum`} subtitle={this.state.group.name}/>
                <div>
                    {this.state.group.semesters
                        .filter(s => !(s.year === this.state.group.activeYear && this.state.group.activeSemester === s.semester))
                        .map((semester, i) =>
                            <div className="row" key={semester.year + "_" + semester.semester + "_" + i}>
                                <h2>Rok: {semester.year}</h2>
                                <AttendancesTable year={semester.year}
                                                  semester={semester.semester}
                                                  students={semester.students}/>
                                <TestsTable year={semester.year}
                                            semester={semester.semester}
                                            students={semester.students}
                                            handleChange={this.handleChange}/>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}