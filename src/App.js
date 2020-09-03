import React from 'react';
import './App.css';
import AnimalList from './Containers/AnimalList';
import Home from './Components/Home';
import Search from './Components/Search';
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
    search: ""
  }

  fetchAnimals = () => {
    fetch(`${api}/animals`)
    .then(resp => resp.json())
    .then(data => this.setState({animals: data}))
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
    .then(data => this.setState({ user: data }))
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
        <Route exact path="/search" render={() => <Search user={this.state.user} animals={this.state.animals} />} />
        <Route exact path="/animals" render={() => <AnimalList user={this.state.user} animals={this.state.animals}/>} /> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
