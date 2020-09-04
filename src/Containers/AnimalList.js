import React from 'react'
import AnimalCard from '../Components/AnimalCard'
import {Redirect} from 'react-router-dom'
import Search from '../Components/Search'

class AnimalList extends React.Component {
   
    render(){
        return (
        <>
            {this.props.user ?
            <div>
                <h1>Search Animals</h1>
                <Search value={this.props.searchTerm} changeHandler={this.props.changeHandler}/>
                {this.props.animals.map(animalObj => < AnimalCard key={animalObj.id} animal={animalObj} clickHandler={this.props.clickHandler}/>)}
            </div>
            :
            <Redirect to="/"/>
            }
        </>
        )
    }
}

export default AnimalList