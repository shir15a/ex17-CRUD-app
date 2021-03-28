import React, { Component } from 'react'

export default class UserTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.length > 0 ? (
                            this.props.users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => { this.props.editRow(user) }} className="button muted-button">Edit</button>
                                        <button onClick={() => this.props.deleteUser(user.id)} className="button muted-button">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
