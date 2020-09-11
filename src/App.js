import React from 'react';
import './style/App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Components/Home';
import AnimalList from './Containers/AnimalList';
import Navbar from './Components/Navbar';
import UserProfile from './Components/UserProfile';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Map from './Components/Map';
import TakeAction from './Components/TakeAction'
import Footer from './Components/Footer';
import 'semantic-ui-css/semantic.min.css'

const api = 'http://localhost:3000/api/v1'

class App extends React.Component {

  state = {
    animals : [],
    user: null,
    searchHistory: [],
    favorites: [],
    searchTerm: "",
    avatar: "",
    bio: ""
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
    .then(data => {
      localStorage.setItem("token", data.jwt)
      localStorage.setItem("key", data.key)
      this.setState({ user: data}, () => this.props.history.push('/'))
    }) 
    .catch(err => {
      window.alert("Username already taken.");
      localStorage.removeItem("token")
      localStorage.removeItem("key")
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
      localStorage.setItem("key", data.key)
      this.setState(
        { user: data, 
          favorites: data.user.animals, 
          avatar: data.user.avatar, 
          bio: data.user.bio}, 
          () => this.props.history.push('/'))
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

  patchUser = () => {
    const user = {
        username: this.state.user.user.username,
        avatar: this.state.avatar,
        bio: this.state.bio
    }

    fetch(`${api}/users/${this.state.user.user.id}`,
        {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json'
            }
        })
    .then(resp => resp.json())
    .then(data => this.setState({
      user: data
    }))
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
      const newfav = JSON.parse(data.favorite)
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


  searchHandler = e => {
    this.setState({ searchTerm: e.target.value })
    
  }

  searchArray = () => {
    return this.state.animals.filter(animalObj => animalObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))  
  }

  listFavorites = () => {
    return this.state.animals.filter(animalObj => this.state.favorites.find(favObj => animalObj.id === favObj.animal_id))

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
    localStorage.removeItem("token")
    localStorage.removeItem("key")
  }


  imgChange = (e) => {
    this.setState({avatar: e.target.value})
  }

  bioChange = (e) => {
    this.setState({bio: e.target.value})
  }

  render() { 

    return (
      <div className="App">
        <Navbar user={this.state.user} logOutHandler={this.logOutHandler}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/map" render={() => <Map />}/>
          <Route path="/signup" render={()=> <Signup submitHandler={this.signupHandler}/>}/>
          <Route path="/login" render={()=> <Login submitHandler={this.loginHandler}/>}/>
          <Route path="/userprofile" render={() => <UserProfile user={this.state.user} animals={this.listFavorites()} deleteUser={this.deleteUser} patchUser={this.patchUser} imgChange={this.imgChange} bioChange={this.bioChange} unfavoriteHandler={this.unfavoriteHandler} />} />
          <Route path="/search" render={() => <AnimalList user={this.state.user} animals={this.searchArray()} searchHandler={this.searchHandler} favoriteHandler={this.favoriteHandler} unfavoriteHandler={this.unfavoriteHandler} userFavorites={this.state.favorites}/>} />
          <Route path="/takeaction" render={() => <TakeAction />}/>
        </Switch>
        <Route exact path="/" component={Footer} />
      </div>
    )
  }
}

export default withRouter(App);
