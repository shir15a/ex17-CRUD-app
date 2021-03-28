import React, { Component } from 'react'

import api from './Components/Api'
import axios from 'axios';

import UserTable from './Components/UserTable'
import AddUserForm from './Components/AddUser'
import EditUser from './Components/EditUser'
import './Components/style.css'


export default class App extends Component {
    state = { data: [], onEdit: false, userToEdit: '' }

    updateData = async () => {
        const info = await api.get('');
        this.setState({ data: info.data })
    }

    componentDidMount = () => {
        this.updateData();
    }

    returnData = () => {
        return this.state.data;
    }


    addPerson = async (peronDeatils) => {
        console.log(peronDeatils);
        const response = await axios.post('https://605b5ef127f0050017c06fd7.mockapi.io/comments', peronDeatils);
        const allData = this.state.data;
        allData.push(response.data);
        this.setState({ data: allData });
        console.log(this.state);
    }

    findUserIndex = (id) => {
        let personIndex;
        this.state.data.forEach((user, index) => {
            if (user.id === id) personIndex = index;
        })
        return personIndex
    }

    deleteUser = (id) => {
        console.log('id', id);
        const allData = this.state.data;
        allData.splice(this.findUserIndex(id), 1);
        this.setState({ data: allData });
        axios.delete(`https://605b5ef127f0050017c06fd7.mockapi.io/comments/${id}`);
    }

    editRow = (user) => {
        console.log('user', user);
        this.setState({ userToEdit: user, onEdit: true })
    }

    updatePerson = (newDetails) => {
        const index = this.findUserIndex(newDetails.id);
        const allData = this.state.data;
        const personToEdit = allData[index];
        personToEdit.name = newDetails.name;
        personToEdit.email = newDetails.email;
        allData.splice(index, 1, personToEdit);
        this.setState({ data: allData });
        axios.put(`https://605b5ef127f0050017c06fd7.mockapi.io/comments/${newDetails.id}`, personToEdit);
    }

    render() {
        return (
            <div className='app'>
                <h1 style={{ display: 'flex', justifyContent: 'center', color: 'skyblue' }}>CRUD App</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <h2>Add user:</h2>
                        <AddUserForm addToTable={this.addPerson} />
                    </div>
                    <div>
                        <h2>View users: </h2>
                        <UserTable users={this.state.data} deleteUser={this.deleteUser} editRow={this.editRow} />
                    </div>
                </div>
                {this.state.onEdit && <EditUser updateTable={this.updatePerson} user={this.state.userToEdit} />}
            </div>
        )
    }
}
