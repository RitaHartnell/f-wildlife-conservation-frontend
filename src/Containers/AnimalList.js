import React from 'react'
import AnimalCard from '../Components/AnimalCard'
import {Redirect} from 'react-router-dom'
import Search from '../Components/Search'

class AnimalList extends React.Component {
   constructor(props){
        super(props)
        this.state={
            sortAnimals: this.props.animals,
            alpha: true,
            searchTerm: ""
        }
    }

    changeHandler = e => {
        this.setState({ searchTerm: e.target.value })
      }
      
      sortAlphabetically = () => {
        console.log(this.props.animals)
        const sortByName = this.props.animals.sort((a,b) => (a.name > b.name) ? 1 : -1)
        this.setState({ sortAnimals: sortByName, alpha: true})
      }
      
      sortStatus = () => {
        console.log(this.props.animals)
        const statusOrder = ["Critically-Endangered", "Endangered", "Near-Threatened", "Vulnerable", "Least-Concern"]
        const sortByStatus = this.props.animals.sort((a,b) => statusOrder.indexOf(a.status) - (statusOrder.indexOf(b.status)))
        this.setState({ sortAnimals: sortByStatus, alpha: false})
      }
      


    render(){
        return (
            <>
            {this.props.user !== null ?    
                <div>
                    <h1>Search Animals</h1>
                    <Search value={this.state.searchTerm} changeHandler={this.state.changeHandler} sortAlphabetically={this.sortAlphabetically} sortStatus={this.sortStatus} alpha={this.state.alpha}/>
                    {this.state.sortAnimals.map(animalObj => < AnimalCard key={animalObj.id} animal={animalObj}/>)}
                </div>
            :
                <Redirect to="/"/>
            }
            </>
        )
    }
}

export default AnimalList