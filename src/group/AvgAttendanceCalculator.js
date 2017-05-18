import React, {Component} from 'react';

class AvgAttendanceCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            averageAttendance: AvgAttendanceCalculator.averageAttendance(props.student)
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            averageAttendance: AvgAttendanceCalculator.averageAttendance(props.student)
        });
    }

    static averageAttendance(student) {
        var attendances = student['attendances'];
        if (attendances.length === 0) return 0;
        var sum = attendances
            .map(a => {
                switch (a.status) {
                    case "present":
                    case "justified":
                        return 1;
                    default :
                        return 0;
                }
            }).reduce((a, b)=> a + b);
        return (sum / attendances.length * 100.0).toFixed(2);
    }

    render() {
        return (
            <td className={this.state.averageAttendance > 80 ? 'success' : 'danger'}>{this.state.averageAttendance}%</td>
        )

    }
}

export default AvgAttendanceCalculator;