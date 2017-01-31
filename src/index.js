import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Layout from './Layout.js'

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

class About extends Component {
    render() {
        return (
            <div>About</div>
        )
    }
}

class NoMatch extends Component {
    render() {
        return (
            <div>NoMatch</div>
        )
    }
}

class Group extends Component {

    componentWillMount() {
        this.setState({
            // route components are rendered with useful information, like URL params
            user: this.findUserById(this.props.params.userId)
        })
    }

    findUserById(id) {
        return {id: 1, name: "dfas"}
    }

    render() {
        return (
            <div>
                <h2>{this.state.user.name}</h2>
                {/* etc. */}
            </div>
        )
    }
}

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Groups}/>
                    <Route path="about" component={About}/>
                    <Route path="users" component={Groups}>
                        <Route path="/users/:userId" component={Group}/>
                    </Route>
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);