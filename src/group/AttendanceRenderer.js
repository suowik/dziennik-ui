import React, {Component} from 'react';
import request from 'request'
import EditableSelect from '../common/EditableSelect.js'
import {resolveSemester} from '../common/resolveSemester.js'
import {hashHistory} from "react-router";

class AttendanceRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: props.row,
            studentId: props.studentId,
            columnId: props.columnId,
            group: props.group
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            row: props.row,
            studentId: props.studentId,
            columnId: props.columnId,
            group: props.group
        })
    }


    renderAttendance(status, studentId, columnId) {
        let id = studentId + "_" + columnId;
        switch (status) {
            case 'present':
                return <EditableSelect key={id} editable={false} value={'+'} identifier={id}
                                       renderWhenEditable={this.renderSelect(studentId, columnId)}/>;
            case 'absent':
                return <EditableSelect key={id} editable={true} value={'-'} identifier={id}
                                       renderWhenEditable={this.renderSelect(studentId, columnId)}/>;
            case 'justified':
                return <EditableSelect key={id} editable={false} value={'(+)'} identifier={id}
                                       renderWhenEditable={this.renderSelect(studentId, columnId)}/>;
            default:
                return <EditableSelect key={id} editable={false} value={''} identifier={id}
                                       renderWhenEditable={this.renderSelect(studentId, columnId)}/>;
        }
    }

    renderSelect(studentId, columnId) {
        return <select onChange={this.justifyStudent(studentId, columnId)}>
            <option value="absent">-</option>
            <option value="present">+</option>
            <option value="justified">(+)</option>
        </select>
    }

    justifyStudent(studentId, columnId) {
        return (e) => {
            let group = this.state.group;
            let semester = resolveSemester(group);
            semester.students[studentId]['attendances'][columnId].status = e.target.value;
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
                this.setState({
                    group: group
                });
            })
        };
    }

    render() {
        return (
            <td>{this.renderAttendance(this.state.row.status, this.props.studentId, this.props.columnId)}</td>
        )
    }
}

export default AttendanceRenderer;