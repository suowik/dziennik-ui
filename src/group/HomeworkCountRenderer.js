import React, {Component} from 'react';

class HomeworkCountRenderer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            averageAttendance: HomeworkCountRenderer.homeworkCount(props.student)
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            averageAttendance: HomeworkCountRenderer.homeworkCount(props.student)
        });
    }

    static homeworkCount(student) {
        var attendances = student['homework'];
        if (attendances.length === 0) return 0;
        var sum = attendances
            .map(a => {
                switch (a.status) {
                    case "-":
                        return 1;
                    default :
                        return 0;
                }
            }).reduce((a, b)=> a + b);
        return sum;
    }

    render() {
        return (
            <td>{this.state.averageAttendance}</td>
        )

    }
}

export default HomeworkCountRenderer;