import React from 'react';
import './App.css';
import AnimalList from './Containers/AnimalList';
import Home from './Components/Home';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import UserProfile from './Components/UserProfile';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Signup from './Components/Signup';

const api='test'

class App extends React.Component {

  state = {
    animals : [],
    user: null, //for testing- change back to obj
    search: ""
  }

  signupHandler = (userObj) => {
    const settings = {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userObj })
    }
    fetch(api, settings)
    .then(resp => resp.json())
    .then(console.log)
  }

  render() {  
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        {/*basic main page?*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/userprofile" render={() => <UserProfile />} />
        <Route exact path="/search" render={() => <Search user={this.state.user}/>} />
        <Route exact path="/animals" render={() => <AnimalList user={this.state.user}/>} /> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
