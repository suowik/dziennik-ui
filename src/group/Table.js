import React, {Component} from 'react';
import { Link, hashHistory } from 'react-router'
import request from 'request'

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: props.headers,
            linkTo: props.linkTo,
            rows: props.rows,
            group: props.group,
            renderer: props.renderer,
            linkLabel: props.linkLabel,
            lastColumnRenderer: props.lastColumnRenderer
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            headers: props.headers,
            linkTo: props.linkTo,
            rows: props.rows,
            group: props.group,
            renderer: props.renderer,
            linkLabel: props.linkLabel
        })
    }

    removeStudent(studentId) {
        let that = this;
        return (e) => {
            e.preventDefault();
            let students = that.state.group.students.filter(student=>student.id !== studentId);
            let group = that.state.group;
            group.students = students;
            group.students = group.students.map((s, i)=> {
                s.id = i;
                return s
            });
            request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
                hashHistory.push('/groups/' + group._id);
            })
        }

    }

    render() {
        return (
            <table className="table table-striped table-condensed">
                <thead>
                <tr>
                    {this.state.headers.map((col, idx) => (
                        <th key={idx}>{col}</th>
                    ))}
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th colSpan={this.state.headers.length}>
                        <Link to={`/groups/${this.state.group._id}/${this.state.linkTo}`}
                              className="btn btn-sm btn-success hidden-print">{this.state.linkLabel}</Link>
                    </th>
                </tr>
                </tfoot>
                <tbody>
                {this.state.group.students.map((student, idx) => (
                    <tr key={student.id}>
                        <td>
                            <button onClick={this.removeStudent(idx)} className="btn btn-sm btn-danger hidden-print"><span
                                className="glyphicon glyphicon-minus"></span>
                            </button>
                        </td>
                        <td>{student.name}</td>
                        <td>{student.surname}</td>
                        {student[this.state.rows].map((row, idx) => (
                            <this.state.renderer row={row} studentId={student.id} columnId={idx} key={idx}
                                                 group={this.state.group}/>
                        ))}
                        <this.state.lastColumnRenderer student={student} key={idx}/>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}


export default Table;