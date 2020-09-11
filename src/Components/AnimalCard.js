import React from 'react'
import '../style/AnimalCard.css'
import { Header, Image, Button, Modal, Segment} from 'semantic-ui-react'


function AnimalCard (props){
    const [open, setOpen] = React.useState(false)

    return (
        <div class="container-animalcard">
            <div className="flip">
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Image className="image-cards" width="100%" height="180px" src={props.animal.img_url} alt={props.animal.name} rounded/>}>
                <Modal.Content >
                    <Segment inverted>
                <Header className="image-title">{props.animal.name}</Header>
                <Image className="image-main" src={props.animal.img_url}/>
                    </Segment>
                <Modal.Description>
                <Segment tertiary>
                    <p> Status: {props.animal.status}</p>
                </Segment>                 
                <Segment secondary>
                    <p> Scientific name: {props.animal.scientific_name}</p>
                    <p> Population: {props.animal.population}</p>
                    <p> Locations: {props.animal.locations.join(', ')} </p>
                        <p> Facts: {props.animal.facts}</p>
                </Segment>
                </Modal.Description>
                </Modal.Content>
                    <Modal.Actions >
                    <>
                        {props.favoriteFlag.length > 0 ?
                                <Button className="unfavorite-btn" icon='star' onClick={()=> {props.unfavoriteHandler(props.animal)}} content="Remove Favorite" positive/>
                            :
                                <Button className="favorite-btn" icon='circle outline' onClick={()=> {props.favoriteHandler(props.animal)}} content="Add to Favorites" />
                        }
                    </>
                    <Button
                    content="close"
                    labelPosition='right'
                    onClick={() => setOpen(false)}
                    />
                </Modal.Actions>
            </Modal>
            </div>
            <div className="title">
                <h3>{props.animal.name}</h3>
            </div>
        </div>
    )
}

export default AnimalCard