import React from 'react'
import {Redirect} from 'react-router-dom'
import myDefault from '../Assets/default.png'
import ProfileModal from '../ProfileModal'
import DeleteModal from '../DeleteModal'
import AnimalFCard from '../Components/AnimalFCard'
import {Container, Header, Grid, Image} from 'semantic-ui-react'

class UserProfile extends React.Component {
    makeGrid = () => {
        let animalCopy = [...this.props.animals]
        let gridArray = []
        let gridRow = []

        while (animalCopy[0]) {
            for (let i=0; i<2; i++){
                if(animalCopy[0]){
                    gridRow.push(animalCopy.shift())
                }
            }
            gridArray.push(gridRow)
            gridRow = []
        }

        return ( 
            gridArray.map((row, idx) => {
                return (
                    <Grid.Row columns={2} key={idx}>
                        {row.map( (animalObj) => {
                            return(
                                <Grid.Column>
                                    <AnimalFCard 
                                        key={animalObj.id} 
                                        animal={animalObj} 
                                        unfavoriteHandler={this.props.unfavoriteHandler}
                                    />
                                </Grid.Column> 
                            )}
                        )}
                    </Grid.Row>
                )
            })
        )
    }

    render () {  
        return (
        <>
        {this.props.user != null ?    
            <>
                <Container
                    textAlign='left'
                    style={{
                        width: '100%',
                        backgroundColor: "lightblue",
                        padding: '2rem',
                        marginTop: '-2rem'
                    }}
                >
                    <Grid>
                        <Grid.Row>
                            <Grid.Column floated='left' width={5}>
                                <Header as='h2' style={{color: 'dimgrey'}}>{this.props.user.user.username}</Header>
                            </Grid.Column>
                            <Grid.Column width={3} floated='right'>
                                <ProfileModal 
                                    avatar={this.props.user.user.avatar} 
                                    bio={this.props.user.user.bio} 
                                    patchUser={this.props.patchUser} 
                                    imgChange={this.props.imgChange} 
                                    bioChange={this.props.bioChange}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                {
                                    this.props.user.user.avatar !== null && this.props.user.user.avatar !== '' ?
                                        <Image alt='' src={this.props.user.user.avatar} size='medium' circular/>
                                    : <Image alt='' src={myDefault} size='medium' circular/>
                                }
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Header as='h4' style={{color: 'dimgrey'}}>BIO</Header>
                                <p style={{color: 'dimgrey'}}>
                                    {
                                        this.props.user.user.bio !=null ?
                                            this.props.user.user.bio
                                        : 
                                        "There's nothing here"
                                    }
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Container
                    style={{
                        padding: '2rem'
                    }}
                >
                {
                    this.props.animals.length !== 0 ?
                        <>
                            <Header as='h1'>Favorite Animals</Header>
                            <Grid>
                                {this.makeGrid()}
                            </Grid>
                        </>
                    :   
                        <>
                            <Header as='h1'>Favorite Animals</Header>
                            <Header as='h3'>You have no favorites!</Header>
                        </>
                }
                </Container>
                <DeleteModal deleteUser={this.props.deleteUser}/>
                <p margin-bottom="70px">  </p>
            </>
        :

        <Redirect to="/"/>
        }
        </>
        )
    }
}

export default UserProfile