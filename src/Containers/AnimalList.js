import React from 'react'
import AnimalCard from '../Components/AnimalCard'
import {Redirect} from 'react-router-dom'
import Search from '../Components/Search'

class AnimalList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            sortAnimals: [],
            display: [],
            alpha: true,
        }
    }
      
      sortAlphabetically = () => {
        const sortByName = this.props.animals.sort((a,b) => (a.name > b.name) ? 1 : -1)
        this.setState({ sortAnimals: sortByName, alpha: true, display: []})
      }
      
      sortStatus = () => {
        const statusOrder = ["Critically-Endangered", "Endangered", "Near-Threatened", "Vulnerable", "Least-Concern"]
        const sortByStatus = this.props.animals.sort((a,b) => statusOrder.indexOf(a.status) - (statusOrder.indexOf(b.status)))
        this.setState({ sortAnimals: sortByStatus, alpha: false, display: []})
      }
      
      clickHandler = (animalObj) => {
        let listCheck = this.state.display.find(animal => animal === animalObj)
        if(listCheck){
            let newDisplay = this.state.display.filter(animal => animal !== animalObj)
            this.setState({
                display: newDisplay
            })
        }else{
            this.setState({
                display: [...this.state.display, animalObj]
            })
        }

      }

    render(){
        return (
            <>
            {this.props.user !== null ?    
                <div>
                    <h1>Search Animals</h1>
                    <Search value={this.props.searchTerm} changeHandler={this.props.searchHandler} sortAlphabetically={this.sortAlphabetically} sortStatus={this.sortStatus} alpha={this.state.alpha}/>
                    {this.props.animals.map(animalObj => < AnimalCard key={animalObj.id} animal={animalObj} clickHandler={this.clickHandler} favoriteHandler={this.props.favoriteHandler} unfavoriteHandler={this.props.unfavoriteHandler} display={this.state.display.includes(animalObj)} favoriteFlag={this.props.userFavorites.filter(fav => fav.animal_id === animalObj.id)}/>)}
                </div>
            :
                <Redirect to="/"/>
            }
            </>
        )
    }
}

export default AnimalList