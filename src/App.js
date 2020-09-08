import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Components/Home';
import AnimalList from './Containers/AnimalList';
import Navbar from './Components/Navbar';
import UserProfile from './Components/UserProfile';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Map from './Components/Map';
import 'semantic-ui-css/semantic.min.css'

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
      this.setState({ user: data, favorites: data.user.favorites})
      })
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
    .then(data => this.setState({ user: data}, () => this.props.history.push('/'))) 
    .catch(err => {
      window.alert("Username already taken.");
      localStorage.removeItem("token")
    })
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
      this.setState(
        { user: data, favorites: data.user.animals}, () => this.props.history.push('/'))
    })
    .catch(err => {
      window.alert("invalid Username or Password.");
      localStorage.removeItem("token")
    })
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    this.props.history.push("/login")
    this.setState({ user: null })
  }

  favoriteHandler = (animalObj) => {
    const newFav = {
      animal_id: animalObj.id
    }
    const settings = {
      method: 'POST',
      headers: {   
        Authorization: `Bearer ${localStorage.getItem("token")}`,      
        accepts: "application/json",
        "content-type": "application/json"},
      body: JSON.stringify(newFav)    
    }
    fetch(`${api}/favorites`, settings) 
    .then(resp => resp.json())
    .then(data => {
      const newfav = data.favorite
      this.setState({ favorites: [...this.state.favorites, newfav]})
    })
  
  }

  unfavoriteHandler = (animalObj) => {
    const favoriteObj = this.state.favorites.find(x => x.animal_id === animalObj.id)
  fetch(`${api}/favorites/${favoriteObj.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
  })
  const removeIt = this.state.favorites.filter(x => x !== favoriteObj)
  this.setState({ favorites: removeIt })
  }

  // profileGetter = (userObj) => {
  //   fetch(`${api}/profile`)
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }


searchHandler = e => {
  this.setState({ searchTerm: e.target.value })
  
}

searchArray = () => {
  return this.state.animals.filter(animalObj => animalObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))  
}

deleteUser = () => {
  const api = 'http://localhost:3000/api/v1/users/'

  fetch(`${api}${this.state.user.user.id}`,
      {
          method: 'DELETE',
          headers: {
              'Content-type': 'application/json'
          }
      })
  .then(resp => resp.json())
  .then(this.setState({user: null}))
}

  render() { 

    return (
      <div className="App">
        <Navbar user={this.state.user} logOutHandler={this.logOutHandler}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" render={() => <Map user={this.state.user}/>}/>
          <Route exact path="/signup" render={()=> <Signup submitHandler={this.signupHandler}/>}/>
          <Route exact path="/login" render={()=> <Login submitHandler={this.loginHandler}/>}/>
          <Route exact path="/userprofile" render={() => <UserProfile deleteUser={this.deleteUser} animals={this.state.favorites} user={this.state.user}/>} />
          <Route exact path="/search" render={() => <AnimalList user={this.state.user} animals={this.searchArray()} searchHandler={this.searchHandler} favoriteHandler={this.favoriteHandler} unfavoriteHandler={this.unfavoriteHandler} userFavorites={this.state.favorites}/>} />
        </Switch>

      </div>
    )
  }
}

export default withRouter(App);
