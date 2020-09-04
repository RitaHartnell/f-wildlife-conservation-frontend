import React from 'react'
import AnimalCard from '../Components/AnimalCard'

function FavoriteAnimals (props) {
    return (
        <div>
            <h1>I am here!</h1>
            {/*I'm going to render a users favorites as an AnimalCard!*/}
            {props.animals.map(animalObj => < AnimalCard key={animalObj.id} animal={animalObj}/>)}
        </div>
    )
}

export default FavoriteAnimals