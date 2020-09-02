import React from 'react';
import './App.css';
import AnimalList from './Containers/AnimalList';
import Search from './Components/Search';

class App extends React.Component {
  render() {  
    return (
      <div className="App">
        <nav className="App-header">
          {/*putting our navigation in here*/}
        </nav>
        {/*basic main page?*/}
        <Search/>
        <AnimalList/>
      </div>
    );
  }
}

export default App;
