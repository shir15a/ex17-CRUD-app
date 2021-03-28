import React, { Component } from 'react'

export default class AddUserForm extends Component {
    state = { name: '', email: '' }

    handleName = (e) => {
        this.setState({ name: e.target.value })
    }

    handleEmail = (e) => {
        console.log(e.target.value);
        this.setState({ email: e.target.value })
    }

    addPerson = (e) => {
        e.preventDefault();
        console.log(this.state);
        let personData = this.state;
        this.props.addToTable(personData);
    }

    render() {
        return (
            <div>
                <form>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={this.handleName} />
                    <label> Email: </label>
                    <input type="email" name="email" onChange={this.handleEmail} />
                    <button onClick={this.addPerson} >Add</button>
                </form>
            </div>
        )
    }
}
