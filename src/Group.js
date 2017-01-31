import React, {Component} from 'react';
import { Link } from 'react-router'

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

export default Group;