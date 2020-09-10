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
                        <p> status: {props.animal.status}</p>
                        <p> scientific name: {props.animal.scientific_name}</p>
                        <p> population: {props.animal.population}</p>
                        <p> locations: {props.animal.locations.join(', ')} </p>
                        <p> facts: {props.animal.facts}</p>
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