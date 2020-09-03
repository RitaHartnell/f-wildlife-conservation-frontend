import React from 'react';
import './App.css';
import AnimalList from './Containers/AnimalList';
import Home from './Components/Home';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import UserProfile from './Components/UserProfile';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends React.Component {

  state = {
    animals : []
  }

  render() {  
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        {/*basic main page?*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/userprofile" render={() => <UserProfile />} />
        <Route exact path="/search" render={() => <Search />} />
        <Route exact path="/animals" render={() => <AnimalList />} /> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
