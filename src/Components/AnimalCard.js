import React from 'react'
import '../style/AnimalCard.css'
import {Container, Header, Image, Button, Segment} from 'semantic-ui-react'


function AnimalCard (props){
    return (
        <Container className="animal-card" onClick={() => {props.clickHandler(props.animal)}}>
            <Segment.Group>
                <Segment>
                    <Header as='h2'>{props.animal.name}</Header>
                    <Image src={props.animal.img_url} alt={props.animal.name} width="100%" rounded/>
                </Segment>
                {
                    props.display ? 
                    <Segment.Group>
                        <Segment>
                            <p> status: {props.animal.status}</p>
                            <p> scientific name: {props.animal.scientific_name}</p>
                            <p> population: {props.animal.population}</p>
                            <p> locations: {props.animal.locations.join(', ')} </p>
                            <p> facts: {props.animal.facts}</p>
                        </Segment>
                        <>
                            {props.favoriteFlag.length > 0 ?
                                <Segment>
                                    <Button 
                                        className="unfavorite-btn" 
                                        onClick={()=> {props.unfavoriteHandler(props.animal)}}
                                    >
                                        Remove Favorite
                                    </Button>
                                </Segment>
                                :
                                <Segment>
                                    <Button 
                                        className="favorite-btn" 
                                        onClick={()=> {props.favoriteHandler(props.animal)}}
                                    >
                                        Add to Favorites
                                    </Button>
                                </Segment>
                            }
                        </>
                    </Segment.Group>
                    :
                    null
                }
            </Segment.Group>
        </Container>
    )
}

export default AnimalCard