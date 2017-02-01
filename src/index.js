import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
//import Layout from './Layout.js'
import Groups from './Groups.js'
import Group from './Group.js'
import Layout from './Layout.js'
import NewGroup from './NewGroup.js'

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/"component={Layout}>
                    <IndexRoute component={Groups}/>
                    <Route path="/groups" component={Groups}/>
                    <Route path="/groups/:groupId" component={Group}/>
                    <Route path="/new-group" component={NewGroup}/>
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);