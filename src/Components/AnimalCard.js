import React from 'react'

//for now we are showing all the info but it would be cool if its starts out as name/images
//onclick will popup the card to show the full details
function AnimalCard (props){
    return (
        <div className="animal-card">
        <h2>{props.animal.name}</h2>
        <img src={props.animal.img_url} alt={props.animal.name} width="100%" />
        <p> status: {props.animal.status}</p>
        <p> scientific name: {props.animal.scientific_name}</p>
        <p> population: {props.animal.population}</p>
        <p> locations: {props.animal.locations} </p>
        <p> facts: {props.animal.facts}</p>
        </div>
    )
}

export default AnimalCard