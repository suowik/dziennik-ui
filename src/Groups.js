import React, {Component} from 'react';
import { Link } from 'react-router'
import request from 'request'

class Groups extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "groups": []
        }
    }

    componentDidMount(){
        var that = this;
        request.get('https://dziennik-api.herokuapp.com/groups/', function (err, res, body) {
            that.setState({ "groups": JSON.parse(body) });
        });
    }

    render() {
        return (
            <div className="row">
                <div className="page-header">
                    <h1>Twoje grupy</h1>
                </div>

                <div>
                    {this.state.groups.map(group => (
                        <GroupTile group={group} key={group._id}/>
                    ))}
                    <div className="col-sm-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Dodaj grupę</h3>
                            </div>
                            <div className="panel-body">
                                <Link to="/new-group" className="btn btn-sm btn-success"><span
                                    className="glyphicon glyphicon-plus"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class GroupTile extends Component {

    constructor(props){
        super(props);
        this.state = {
            group: props.group
        }
    }

    render(){
        return (
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.group.name}</h3>
                    </div>
                    <div className="panel-body">
                        {this.state.group.dateOfActivities} &nbsp;
                        <Link to={`/groups/${this.state.group._id}`} className="btn btn-sm btn-success">Podgląd</Link>
                    </div>
                </div>
            </div>
        )

    }
}

export default Groups