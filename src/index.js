import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Login from './Login.js'
import Logout from './Logout.js'
import Groups from './Groups.js'
import Group from './Group.js'
import Layout from './Layout.js'
import NewGroup from './NewGroup.js'
import Attendance from './Attendance.js'
import Homework from './Homework.js'
import TestResult from './TestResult.js'
import auth from './auth.js'

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/"component={Layout}  onEnter={requireAuth}>
                    <IndexRoute component={Groups}/>
                    <Route path="/groups" component={Groups}/>
                    <Route path="/groups/:groupId" component={Group}/>
                    <Route path="/groups/:groupId/attendances" component={Attendance}/>
                    <Route path="/groups/:groupId/homework" component={Homework}/>
                    <Route path="/groups/:groupId/tests" component={TestResult}/>
                    <Route path="/new-group" component={NewGroup}/>
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
            </Router>
        )
    }
}

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);