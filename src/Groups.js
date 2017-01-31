import React, {Component} from 'react';
import { Link } from 'react-router'

class Groups extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "groups": [
                {id: "3C", name: "3C", "description": "czw. 10:00 - 11:30"},
                {id: "3A", name: "3C", "description": "czw. 10:00 - 11:30"},
                {id: "3B", name: "3C", "description": "czw. 10:00 - 11:30"},
                {id: "3D", name: "3C", "description": "czw. 10:00 - 11:30"}
            ]
        }
    }

    render() {
        return (
            <div className="row">
                <div className="page-header">
                    <h1>Twoje grupy</h1>
                </div>

                <div className="row">
                    {this.state.groups.map(group => (
                        <div className="col-sm-3" key={group.id}>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">3C</h3>
                                </div>
                                <div className="panel-body">
                                    {group.description}
                                    <Link to={`/groups/${group.id}`} className="btn btn-sm btn-success">Podgląd</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Groups