import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Layout from './Layout.js'
import Groups from './Groups.js'
import Group from './Group.js'

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Groups}/>
                    <Route path="users" component={Groups}>
                        <Route path="/users/:userId" component={Group}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);