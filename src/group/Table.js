import React, {Component} from 'react';
import { Link, hashHistory } from 'react-router'
import request from 'request'

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: props.headers,
            type: props.type,
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
            type: props.type,
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

    removeColumn(type, index) {
        index -= 3;
        let that = this;
        let group = that.state.group;
        group.students = that.state.group.students;
        group.students = group.students.map((s, i)=> {
            s[type].splice(index, 1);
            return s
        });
        request.post('https://dziennik-api.herokuapp.com/groups/', {form: JSON.stringify(group)}, e => {
            hashHistory.push('/groups/');
        })
    }


    render() {
        return (
            <table className="table table-striped table-condensed">
                <thead>
                <tr>
                    {this.state.headers.map((col, idx) => (
                        <th key={idx}>
                            {col}
                            {idx > 2 && idx < this.state.headers.length - 1 &&
                            <button
                                onClick={() => {if(confirm('Czy na pewno usunąć?')) {this.removeColumn(this.state.type,idx)}}}
                                className="btn btn-sm btn-danger hidden-print"><span
                                className="glyphicon glyphicon-minus"></span>
                            </button>
                            }
                        </th>
                    ))}
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th colSpan={this.state.headers.length}>
                        <Link to={`/groups/${this.state.group._id}/${this.state.type}`}
                              className="btn btn-sm btn-success hidden-print">{this.state.linkLabel}</Link>
                    </th>
                </tr>
                </tfoot>
                <tbody>
                {this.state.group.students.map((student, idx) => (
                    <tr key={student.id}>
                        <td>
                            <button onClick={this.removeStudent(idx)}
                                    className="btn btn-sm btn-danger hidden-print"><span
                                className="glyphicon glyphicon-minus"></span>
                            </button>
                        </td>
                        <td>{student.id + 1}.</td>
                        <td>{student.name} {student.surname}</td>
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