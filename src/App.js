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
    sortAnimals: [],
    user: null,
    searchHistory: [],
    favorites: [],
    alpha: false
  }

  fetchAnimals = () => {
    fetch(`${api}/animals`)
    .then(resp => resp.json())
    .then(data => this.setState({animals: data, sortAnimals: data}))
  }


  componentDidMount() {

    this.fetchAnimals()
    //if(this.state.user !== null)
    // this.favoriteHandler()
    // this.searchHistoryHandler()

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
    .then(data => this.setState({ user: data }))
  }

/*   fetchFavorites = () => {
    fetch(`${api}/favorite${this.state.user.id?}`)
    .then(resp => resp.json())
    .then(console.log)
  }

  fetchSearchHistory = () => {
    fetch(`${api}/search${this.state.user.id?}`)
    .then(resp => resp.json())
    .then(console.log)
  } 
  
*/

changeHandler = e => {
  this.setState({ searchTerm: e.target.value })
}

sortAlphabetically = () => {
  const sortByName = this.state.animals.sort((a,b) => (a.name > b.name) ? 1 : -1)
  this.setState({ sortAnimals: sortByName, alpha: true})
}

sortStatus = () => {
  const statusOrder = ["Critically-Endangered", "Endangered", "Near-Threatened", "Vulnerable", "Least-Concern"]
  const sortByStatus = this.state.animals.sort((a,b) => statusOrder.indexOf(a.status) - (statusOrder.indexOf(b.status)))
  this.setState({ sortAnimals: sortByStatus, alpha: false})
}

  render() {  
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        {/*basic main page?*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" render={()=> <Signup submitHandler={this.signupHandler}/>}/>
        <Route exact path="/login" render={()=> <Login submitHandler={this.loginHandler}/>}/>
        <Route exact path="/userprofile" render={() => <UserProfile user={this.state.user}/>} />
        <Route exact path="/search" render={() => <AnimalList user={this.state.user} animals={this.state.sortAnimals} sortAlphabetically={this.sortAlphabetically} sortStatus={this.sortStatus}/>} alpha={this.state.alpha} changeHandler={this.changeHandler}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
