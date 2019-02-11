import React, { Component } from 'react';
import User from './components/User';
import axios from 'axios';
import './App.css'; 
import './components/Header';
import TwoPoints from './components/Header';
import About from './components/About';
import MoreRes from './components/MoreResourses';
import Image from './components/Logo';




class App extends Component {
  constructor(){
    super()
    this.state ={
      users: [],
      name: '',
      condition: '',
      howIsYourDay: ''

    }

    this.deleteUser = this.deleteUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }
handleName(val){
  this.setState({
    name:val
  })
}
handleCondition(val){
  this.setState({
    condition:val
  })
}
handleHowIsYourDay(val){
  this.setState({
    howIsYourDay:val
  })
}
//what is up with this

componentDidMount(){
  axios.get('/api/healths').then(res=>{
    this.setState({
      users: res.data
    })
  });
}

createUser(){
  const {name,condition,howIsYourDay} = this.state;
    axios.post('/api/health', {name,condition,howIsYourDay}).then(res =>{
      console.log(res.data)
      this.setState({
        users: res.data,
        name: '',
        condition: '',
        howIsYourDay: ''
          })
    })
}
deleteUser(id){
  axios.delete(`/api/health/${id}`).then(res =>{
    this.setState({
      users:res.data
    })
  })
}
setEdit(name,condition,howIsYourDay){
  this.setState({
    name,
    condition,
    howIsYourDay
  })
};


updateUser(id){
  const {name, condition, howIsYourDay} = this.state;
  axios.put(`/api/health/${id}`, {name, condition, howIsYourDay}).then(res => {
    this.setState({
      users: res.data,
      name: '',
      condition: '',
      howIsYourDay: ''
    })
  })
}



   
  render() {
const {name, condition, howIsYourDay} =this.state;
const mappedUsers = this.state.users.map(user => {
  return(
    <User
    deleteUser = {this.deleteUser}
    key={user.id}
    user={user}
    condition={condition}
    howIsYourDay={howIsYourDay}
    updateUser = {this.updateUser}
    setEdit = {this.setEdit}
    />
  );

})
    return (
      <div className="App">
<h1>HEALTH</h1>
        <header className="Main Header">
        <TwoPoints/>
        <About/>
        <Image></Image>
          <div></div>
        </header>
        <input 
        type ='text'
        placeholder = 'Username'
        onChange={(e)=>this.handleName(e.target.value)}
        value = {this.state.name}
        />
        <input
        type ='text'
        placeholder = 'Condition'
        onChange={(e)=>this.handleCondition(e.target.value)}
        value = {this.state.condition}
        />
         <input
        type ='text'
        placeholder = 'How is your day?'
        onChange={(e)=>this.handleHowIsYourDay(e.target.value)}
        value = {this.state.howIsYourDay}
        />

        <button onClick={() => this.createUser()}>Submit</button>
        {mappedUsers}
        <Image/>

      </div>
      
    );
  }
}

export default App;

