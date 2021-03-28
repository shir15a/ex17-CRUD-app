import React, { Component } from 'react'

export default class EditUser extends Component {
    state = { name: '', email: '', id: this.props.user.id }

    handleName = (e) => {
        this.setState({ name: e.target.value })
    }

    handleEmail = (e) => {
        console.log(e.target.value);
        this.setState({ email: e.target.value })
    }

    updatePerson = (e) => {
        e.preventDefault();
        console.log(this.state);
        let personData = this.state;
        this.props.updateTable(personData);
    }

    render() {
        return (
            <div style={{ marginLeft:'150px'}}>
                <h2>Edit here: </h2>
                <label>Name: </label>
                <input type="text" name="name" value={this.props.user.name} onChange={this.handleName} />
                <label>Email: </label>
                <input type="email" name="email" value={this.props.user.email} onChange={this.handleEmail} />
                <button onClick={this.updatePerson}>Save ! </button>
            </div>
        )
    }
}
