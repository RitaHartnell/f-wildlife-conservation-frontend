import React from 'react'
import AnimalCard from '../Components/AnimalCard'
import {Redirect} from 'react-router-dom'

function  AnimalList (props) {

    return (
        <>
        {props.user ?
        <div>
            <h1>List of Animals</h1>
            {props.animals.map(animalObj => < AnimalCard key={animalObj.id} animal={animalObj}/>)}
        </div>
        :
        <Redirect to="/"/>
        }
        </>
    )
}

export default AnimalList