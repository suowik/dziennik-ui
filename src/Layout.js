import React, {Component} from 'react';
import { Link } from 'react-router'

class Layout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <div className="row">
                    <div className="col-sm-12">
                        <Link to="/" className="btn btn-sm btn-success btn-block">Powrót</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout