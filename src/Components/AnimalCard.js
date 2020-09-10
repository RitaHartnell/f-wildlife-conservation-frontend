import React from 'react'


 function AnimalCard (props){
    return (
        <div className="animal-card" onClick={() => {props.clickHandler(props.animal)}}>
        <h2>{props.animal.name}</h2>
        <img src={props.animal.img_url} alt={props.animal.name} width="100%" />
        {
            props.display ? 
            <>
                <p> status: {props.animal.status}</p>
                <p> scientific name: {props.animal.scientific_name}</p>
                <p> population: {props.animal.population}</p>
                <p> locations: {props.animal.locations.join(', ')} </p>
                <p> facts: {props.animal.facts}</p>
                <>{props.favoriteFlag.length > 0 ?
                    <button className="unfavorite-btn" onClick={()=> {props.unfavoriteHandler(props.animal)}}>Remove Favorite</button>
                    :
                    <button className="favorite-btn" onClick={()=> {props.favoriteHandler(props.animal)}}>Add to Favorites</button>
                }</>
            </>
            :
            null
        }
        </div>
    )
}

export default AnimalCard