import React from 'react'


 function AnimalFCard (props){

    return (
        <div className="animal-card">
        <h2>{props.animal.name}</h2>
        <img src={props.animal.img_url} alt={props.animal.name} width="100%" />
            <p> status: {props.animal.status}</p>
            <p> scientific name: {props.animal.scientific_name}</p>
            <p> population: {props.animal.population}</p>
            <p> locations: {props.animal.locations.join(', ')} </p>
            <p> facts: {props.animal.facts}</p>
            <button className="unfavorite-btn" onClick={()=> {props.unfavoriteHandler(props.animal)}}>Remove Favorite</button>
        </div>
    )
}

export default AnimalFCard