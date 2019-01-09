import React, {Component} from 'react';
import request from 'request'
import EditableSelect from '../common/EditableSelect.js'
import {resolveSemester} from '../common/resolveSemester.js'
import {hashHistory} from "react-router";

class TestResultRenderer extends Component {

    failed(marks) {
        let arrayMarks = this.marksToArray(marks, TestResultRenderer.rawMarkValue);
        let sum = arrayMarks.reduce((a, b) => {
            return a + b
        });
        return (sum / arrayMarks.length < 3.0) && arrayMarks[arrayMarks.length - 1] < 3;
    }

    componentWillReceiveProps(props) {
        let that = this;
        this.setState({
            row: props.row,
            failed: that.failed(props.row.marks),
            studentId: props.studentId,
            columnId: props.columnId,
            group: props.group
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            row: props.row,
            failed: false,
            studentId: props.studentId,
            columnId: props.columnId,
            group: props.group
        }
    }

    renderMarks(marks, studentId, columnId) {
        let res = this.marksToArray(marks, this.renderMarkFactory(studentId, columnId))
            .filter((e) => e != null);
        return new Array(res.length + (res.length - 1)).fill(1).map((e, i) => {
            let index = Math.floor(i / 2);
            if (i % 2 === 0) {
                return res[index]
            } else {
                return ' / '
            }
        });
    }

    static isNumeric(n) {
        return !isNaN(parseFloat(n));
    }

    renderMarkFactory(studentId, columnId) {
        let markNames = ['first', 'second', 'third'];

        return (marks, mark, i) => {
            let prevMark = marks[markNames[i - 1]];
            let rawValue = TestResultRenderer.rawMarkValue(marks, mark);
            let id = studentId + "_" + columnId + "_" + mark;
            if (rawValue === 0) {
                return <EditableSelect key={id} editable={true} value={rawValue} identifier={id}
                                       renderWhenEditable={this.renderSelect(id, studentId, columnId, mark, rawValue)}/>;
            }
            if ((prevMark === "2.0" || prevMark === "2") && rawValue == null) {
                return <EditableSelect key={id} editable={true} value={rawValue} identifier={id}
                                       renderWhenEditable={this.renderSelect(id, studentId, columnId, mark, rawValue)}/>;
            }
            if (rawValue != null) {
                return <EditableSelect key={id} editable={false} value={rawValue} identifier={id}
                                       renderWhenEditable={this.renderSelect(id, studentId, columnId, mark, rawValue)}/>;

            }
            return rawValue
        }
    }

    renderSelect(id, studentId, columnId, mark, current) {
        return <select key={id} onChange={this.changeMark(studentId, columnId, mark)} defaultValue={current}>
            <option value="0">0</option>
            <option value="2">2.0</option>
            <option value="3">3.0</option>
            <option value="3.5">3.5</option>
            <option value="4">4.0</option>
            <option value="4.5">4.5</option>
            <option value="5">5.0</option>
        </select>
    }

    changeMark(studentId, columnId, mark) {
        return (e) => {
            let group = this.state.group;
            let semester = resolveSemester(group);
            semester.students[studentId]['tests'][columnId]['marks'][mark] = e.target.value;
            let requestBody = {
                method: 'POST',
                url: 'https://dziennik-api.herokuapp.com/groups/',
                json: true,
                body: group,
                headers: {
                    Authorization: 'Basic zaq12wsxcde34rfvbgt56yhnmju78ik,.lo90p;/'
                }
            };
            request(requestBody, () => {
                this.setState({
                    group: group
                });
            })
        }
    }

    marksToArray(marks, cb) {
        return ['first', 'second', 'third'].map((mark, i) => {
            return cb(marks, mark, i)
        }).filter(m => m !== null);
    }

    static rawMarkValue(marks, mark) {
        let value = marks[mark];
        if (value !== null && value !== undefined) {
            return parseFloat(value)
        }
        return null
    }

    render() {
        return (
            <td className={this.failed(this.state.row.marks) ? 'danger' : 'success'}>
                {this.renderMarks(this.state.row.marks, this.props.studentId, this.props.columnId)}
            </td>
        )
    }
}

export default TestResultRenderer;