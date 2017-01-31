import React, {Component} from 'react';
import { Link } from 'react-router'

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>Moje miniony</h1>
                </div>
                <ul>
                    <li><Link to="/users">users</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default Layout