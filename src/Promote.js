import React, {Component} from 'react'
import request from 'request'
import {resolveSemester} from './common/resolveSemester.js'
import {REFERENCE_GROUP} from './common/referenceGroup.js'
import Header from './common/Header.js'
import {hashHistory} from 'react-router';

export default class Promote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeYear: "2017/2018",
            activeSemester: 1,
            name: "",
            archive: false,
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

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    promoteGroup = (e) => {
        e.preventDefault();
        let group = this.state.group;
        let newSemester = {};
        newSemester.year = this.state.activeYear;
        newSemester.semester = this.state.activeSemester;
        newSemester.students = [];
        resolveSemester(this.state.group).students.forEach(student => {
            newSemester.students.push({
                name: student.name,
                surname: student.surname,
                homework: [],
                attendances: [],
                tests: [],
                id: student.id
            })
        });
        group.name = this.state.name;
        group.semesters.push(newSemester);
        group.activeSemester = this.state.activeSemester;
        group.activeYear = this.state.activeYear;
        group.archive = this.state.archive;
        let requestBody = {
            method: 'POST',
            url: 'https://dziennik-api.herokuapp.com/groups/',
            json: true,
            body: group,
            headers: {
                Authorization: 'Basic zaq12wsxcde34rfvbgt56yhnmju78ik,.lo90p;/'
            }
        };
        request(requestBody,() => {
            hashHistory.push('/groups')
        })
    };

    render() {
        return (
            <div>
                <Header title={`Promuj grupę`} subtitle={this.state.group.name}/>
                <div>
                    <form onSubmit={this.promoteGroup}>

                        <div className="form-group">
                            <label htmlFor="activeYear">Rok zajęć (rrrr/rrrr)</label>
                            <input type="text"
                                   className="form-control"
                                   name="activeYear"
                                   id="activeYear"
                                   onChange={this.handleInputChange}
                                   value={this.state.activeYear}
                                   placeholder="Rok zajęć"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Nowa nazwa grupy</label>
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                   id="name"
                                   onChange={this.handleInputChange}
                                   value={this.state.name}
                                   placeholder="Nowa nazwa grupy"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="activeYear">Archiwalna?</label>
                            <input type="checkbox"
                                   className="form-control"
                                   name="archive"
                                   id="archive"
                                   onChange={this.handleInputChange}
                                   checked={this.state.archive}
                                   placeholder="Archiwalna?"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="activeSemester">Semestr</label>
                            <select className="form-control"
                                    name="activeSemester"
                                    id="activeSemester"
                                    onChange={this.handleInputChange}
                                    value={this.state.activeSemester}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-sm btn-success">Zapisz</button>
                    </form>
                </div>
            </div>
        )
    }
}