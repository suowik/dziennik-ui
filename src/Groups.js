import React, {Component} from 'react';
import { Link } from 'react-router'

class Groups extends Component {

    render() {
        return (
            <div>
                <h1>Users</h1>

                <div className="master">
                    <ul>
                        {/* use Link to route around the app */}
                        {this.state.users.map(user => (
                            <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    }

    componentWillMount() {
        this.setState({
            users: [{id: 1, name: "dupa"}]
        })
    }
}

export default Groups