import React, {Component} from 'react'
import request from 'request'
import {REFERENCE_GROUP} from './common/referenceGroup.js'
import Header from './common/Header.js'

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
                            {student[this.state.field].map((a, i) => <td key={i}>{this.state.renderer(a)}</td>)}
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
            renderer: (attendance) => {
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
            renderer: (test) => {
                let first = test.marks.first || null;
                let second = test.marks.second || null;
                let third = test.marks.third || null;
                return [first, second, third].filter(m => m !== null).join(" / ");
            }
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
                                            students={semester.students}/>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}