import React, {Component} from 'react';
import request from 'request'


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
        switch (status) {
            case 'present':
                return "+";
            case 'absent':
                return <select onChange={this.justifyStudent(studentId,columnId)}>
                    <option value="absent">-</option>
                    <option value="justified">(+)</option>
                </select>;
            case 'justified':
                return "(+)";
            default:
                return "";
        }
    }

    justifyStudent(studentId, columnId) {
        return (e) => {
            let group = this.state.group;
            group.students[studentId]['attendances'][columnId].status = e.target.value;
            request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
                this.setState({
                    group: group
                });
            });

        };
    }

    render() {
        return (
            <td>{this.renderAttendance(this.state.row.status, this.props.studentId, this.props.columnId)}</td>
        )
    }
}

export default AttendanceRenderer;