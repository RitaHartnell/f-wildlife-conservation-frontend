import React from 'react'
import AnimalCard from '../Components/AnimalCard'
import {Redirect} from 'react-router-dom'

class AnimalList extends React.Component {
   
    constructor(props) {
        supers(props)
        this.state={
            animals : [],
            sortAnimals: [],
            alpha: false
        }
    }
    searchHandler = e => {
        return this.state.sortAnimals.sort()
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

    changeHandler = e => {
        this.setState({ searchTerm: e.target.value })
    }

    render(){
        return (
            <>
            {props.user ?
            <div>
                <h1>Search Animals</h1>
                <Search value={this.state.searchTerm} changeHandler={this.changeHandler}/>
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