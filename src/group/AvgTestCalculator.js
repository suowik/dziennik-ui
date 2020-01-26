import React, {Component} from 'react';

class AvgTestCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            average: this.average(props.student)
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            average: this.average(props.student)
        });
    }

    average(student) {
        var tests = student['tests'];
        if (tests.length === 0) return 0;

        let sum = tests
            .map(m => {
                return this.averageOfMarks(m.marks)
            }).reduce((a, b)=> a + b);
            const a = tests.filter(test => {
                const standardMarks = Object.values(test.marks).filter(e => e !== "PASSED" && e !== "NOT_PASSED" && e !== null)
                return standardMarks.length > 0;
            })
        return (sum / a.length).toFixed(2);
    }

    averageOfMarks(marks) {
        let marksAsArray = ['first', 'second', 'third']
        .map((mark)=> {
            return parseFloat(marks[mark]);
        })
        .filter(m => m !== null && m !== undefined && !isNaN(m));
        if(marksAsArray.length > 0) {
            let sum = marksAsArray.reduce((a, b)=>a + b);
            return (sum / marksAsArray.length);
        } else {
            return 0.0;
        }
    }

    render() {
        return (
            <td className={this.state.average > 2.99 ? 'success' : 'danger'}>{this.state.average}</td>
        )

    }
}

export default AvgTestCalculator;