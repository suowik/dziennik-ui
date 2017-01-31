import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
//import Layout from './Layout.js'
import Groups from './Groups.js'
import Group from './Group.js'

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/groups" component={Groups}/>
                <Route path="/groups/:groupId" component={Group}/>
            </Router>
        )
    }
}

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);