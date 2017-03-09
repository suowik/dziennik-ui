import React, {Component} from 'react';

class HomeworkRenderer extends Component {
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

    render() {
        return (
            <td>{this.state.row.status}</td>
        )
    }
}

export default HomeworkRenderer;