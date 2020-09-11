import React from 'react'
import '../style/AnimalCard.css'
import { Header, Image, Button, Modal} from 'semantic-ui-react'


function AnimalCard (props){
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <Header as='h2'>{props.animal.name}</Header>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Image width="100%" height="180px" src={props.animal.img_url} alt={props.animal.name} rounded/>}>
                <Modal.Content >
                <Header className="image-title">{props.animal.name}</Header>
                <Image className="image-main" src={props.animal.img_url}/>
                <Modal.Description>
                    <p> status: {props.animal.status}</p>
                    <p> scientific name: {props.animal.scientific_name}</p>
                    <p> population: {props.animal.population}</p>
                    <p> locations: {props.animal.locations.join(', ')} </p>
                    <p> facts: {props.animal.facts}</p>
                </Modal.Description>
                </Modal.Content>
                    <Modal.Actions>
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
        </>
    )
}

export default AnimalCard