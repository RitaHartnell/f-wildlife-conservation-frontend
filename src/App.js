import React from 'react';
import './App.css';
import Home from './Components/Home';
import AnimalList from './Containers/AnimalList';
import Navbar from './Components/Navbar';
import UserProfile from './Components/UserProfile';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';

const api = 'http://localhost:3000/api/v1'

class App extends React.Component {

  state = {
    animals : [],
    user: null,
    searchHistory: [],
    favorites: [],
    searchTerm: ""
  }

  fetchAnimals = () => {
    fetch(`${api}/animals`)
    .then(resp => resp.json())
    .then(data => this.setState({animals: data}))
  }


  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`${api}/profile`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(resp => resp.json())
      .then(data => {
      this.setState({ user: data})
      })
    }else{
      return <Redirect to="/"/>
    }
    this.fetchAnimals()
  }

  signupHandler = (userObj) => {
    fetch(`${api}/users`, {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(resp => resp.json())
    .then(data => this.setState({ user: data}))
  }

  loginHandler = (userObj) => {
    fetch(`${api}/login`, {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({ user: data, favorites: data.user.animals})
    })
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    this.setState({ user: null })
  }

  favoriteHandler = (animalObj) => {
    console.log(animalObj)
    console.log(this.state.user)
    //console.log(this.state.favorites)
    const newFav = {
      animal: animalObj
    }
    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFav)    
    }
    fetch(`${api}/favorites`, settings) 
    .then(resp => resp.json())
    .then(data => console.log())
  
  }

  // profileGetter = (userObj) => {
  //   fetch(`${api}/profile`)
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }


searchHandler = e => {
  this.setState({ searchTerm: e.target.value })
  //also do the patch request.
}

searchArray = () => {
  return this.state.animals.filter(animalObj => animalObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))  
}


  render() {  
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar user={this.state.user} logOutHandler={this.logOutHandler}/>
        {/*basic main page?*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" render={()=> <Signup submitHandler={this.signupHandler}/>}/>
        <Route exact path="/login" render={()=> <Login submitHandler={this.loginHandler}/>}/>

        <Route exact path="/userprofile" render={() => <UserProfile user={this.state.user}/>} />
        <Route exact path="/search" render={() => <AnimalList user={this.state.user} animals={this.searchArray()} searchHandler={this.searchHandler} favoriteHandler={this.favoriteHandler}/>} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
