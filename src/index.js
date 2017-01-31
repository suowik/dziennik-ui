import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

const Users = React.createClass({

    render() {
        return (
            <div>
                <h1>Users</h1>

                <div className="master">
                    <ul>
                        {/* use Link to route around the app */}
                        {this.state.users.map(user => (
                            <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    },
    componentWillMount() {
        this.setState({
            users: [{id: 1, name: "dupa"}]
        })
    }
});

const About = React.createClass({
    render() {
        return (
            <div>About</div>
        )
    }
});

const NoMatch = React.createClass({
    render() {
        return (
            <div>NoMatch</div>
        )
    }
});

const User = React.createClass({

    componentWillMount() {
        this.setState({
            // route components are rendered with useful information, like URL params
            user: this.findUserById(this.props.params.userId)
        })
    },

    findUserById(id){
        return {id: 1, name: "dfas"}
    },
    render() {
        return (
            <div>
                <h2>{this.state.user.name}</h2>
                {/* etc. */}
            </div>
        )
    }
});

const App = React.createClass({
    render() {
        return (
            <div>
                <div>App</div>
                <ul>
                    <li><Link to="/users">users</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
});

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Users}/>
                    <Route path="about" component={About}/>
                    <Route path="users" component={Users}>
                        <Route path="/user/:userId" component={User}/>
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