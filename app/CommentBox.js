import React from "react";

export default class CommentBox extends React.Component {
    constructor() {
        super();
        // Initial state of the component
        this.state = { username: 'jerry' }
    }
    handleChange(e) {
        this.setState({
            username: e.target.value
        });
    }
    render() {
        return( <div>
            Hello { this.state.username } < br / >
            Change Name: < input type = "text"
        value = { this.state.username }
        onChange = { this.handleChange.bind(this) }
        /> 
        </div>
        );
    }
}
