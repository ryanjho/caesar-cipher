import React, { Component } from 'react';
import caesarShift from '../CaesarShift';

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }
    handleChange = event => {
        this.setState({message: event.target.value});
    }
    render() {
        return (
            <div className="encode">
                <h1>Encode</h1>
                <h2>Message</h2>
                <textarea onChange={this.handleChange} placeholder="Input your message to be encrypted" value={this.message} rows="10" cols="50"></textarea>
                <h3>Encrypted Message:</h3>
                <p>{ caesarShift(this.state.message, 5)}</p>
            </div>
        )
    }
}

export default Code;