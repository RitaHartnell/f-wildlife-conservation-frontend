import React from 'react'
import { Container, Header, Button, Segment, Image } from 'semantic-ui-react'


function AnimalFCard (props){

    return (
        <Container className="animal-card">
            <Segment.Group>
                <Segment>
                    <Header as='h2'>{props.animal.name}</Header>
                    <Image src={props.animal.img_url} alt={props.animal.name} width="100%" />
                </Segment>
                <Segment.Group>
                    <Segment>
                        <p> Status: {props.animal.status}</p>
                        <p> Scientific name: {props.animal.scientific_name}</p>
                        <p> Population: {props.animal.population}</p>
                        <p> Locations: {props.animal.locations.join(', ')} </p>
                        <p> Facts: {props.animal.facts}</p>
                    </Segment>
                    <Segment>
                        <Button 
                            className="unfavorite-btn" 
                            onClick={()=> {props.unfavoriteHandler(props.animal)}}
                        >
                            Remove Favorite
                        </Button>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
        </Container>
    )
}

export default AnimalFCard