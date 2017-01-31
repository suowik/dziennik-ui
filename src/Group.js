import React, {Component} from 'react';

class Group extends Component {

    constructor(props){
        super(props);
        this.state = {
            "user": {id: 1, name: "dfas"}
        }
    }

    componentWillMount() {
        this.setState({
            // route components are rendered with useful information, like URL params
            user: this.findUserById(this.props.params.groupId)
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