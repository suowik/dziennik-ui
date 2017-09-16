import React, {Component} from 'react';
import {Link} from 'react-router'
import request from 'request'
import Header from './common/Header.js'

class Groups extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "groups": []
        }
    }

    componentDidMount() {
        let that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/', function (err, res, body) {
            let groups = JSON.parse(body).sort((a, b) => {
                return a.name.localeCompare(b.name)
            });
            that.setState({groups: groups});
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Header title={`Twoje grupy`} subtitle={``}/>

                    <div>
                        {this.state.groups.filter(g => !g.archive).map(group => (
                            <GroupTile group={group} key={group._id}/>
                        ))}
                        <div className="col-sm-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Dodaj grupę</h3>
                                </div>
                                <div className="panel-body">
                                    <Link to="/new-group" className="btn btn-sm btn-success">
                                        <span className="glyphicon glyphicon-plus"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Header title={`Grupy archiwalne`} subtitle={``}/>
                    <div>
                        {this.state.groups.filter(g => g.archive).map(group => (
                            <GroupTile group={group} key={group._id}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

class GroupTile extends Component {

    render() {
        return (
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.group.name}</h3>
                    </div>
                    <div className="panel-body">
                        {this.props.group.dateOfActivities} &nbsp;
                        <Link to={`/groups/${this.props.group._id}`} className="btn btn-sm btn-success">Podgląd</Link>
                    </div>
                </div>
            </div>
        )

    }
}

export default Groups