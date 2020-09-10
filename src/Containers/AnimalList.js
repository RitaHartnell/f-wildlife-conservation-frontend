import React from 'react'
import AnimalCard from '../Components/AnimalCard'
import {Redirect} from 'react-router-dom'
import SearchBar from '../Components/Search'
import {Container, Grid, Header} from 'semantic-ui-react'

class AnimalList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            sortAnimals: [],
            display: [],
            alpha: true,
        }
    }
    
    sortAlphabetically = () => {
        const sortByName = this.props.animals.sort((a,b) => (a.name > b.name) ? 1 : -1)
        this.setState({ sortAnimals: sortByName, alpha: true, display: []})
    }
    
    sortStatus = () => {
        const statusOrder = ["Critically-Endangered", "Endangered", "Near-Threatened", "Vulnerable", "Least-Concern"]
        const sortByStatus = this.props.animals.sort((a,b) => statusOrder.indexOf(a.status) - (statusOrder.indexOf(b.status)))
        this.setState({ sortAnimals: sortByStatus, alpha: false, display: []})
    }
    
    makeGrid = () => {
        let animalCopy = [...this.props.animals]
        let gridArray = []
        let gridRow = []

        while (animalCopy[0]) {
            for (let i=0; i<3; i++){
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
                    <Grid.Row columns={3} key={idx}>
                        {row.map( (animalObj) => {
                            return(
                                <Grid.Column>
                                    <AnimalCard 
                                        key={animalObj.id} 
                                        animal={animalObj} 
                                        clickHandler={this.clickHandler} 
                                        favoriteHandler={this.props.favoriteHandler} 
                                        unfavoriteHandler={this.props.unfavoriteHandler} 
                                        display={this.state.display.includes(animalObj)} 
                                        favoriteFlag={this.props.userFavorites.filter(
                                            (fav) => fav.animal_id === animalObj.id
                                        )}
                                    />
                                </Grid.Column> 
                            )}
                        )}
                    </Grid.Row>
                )
            })
        )
    }
    
    clickHandler = (animalObj) => {
        let listCheck = this.state.display.find(animal => animal === animalObj)
        if(listCheck){
            let newDisplay = this.state.display.filter(animal => animal !== animalObj)
            this.setState({
                display: newDisplay
            })
        }else{
            this.setState({
                display: [...this.state.display, animalObj]
            })
    }

    }
    render(){
        return (
            <>
            {this.props.user !== null ?
                <>    
                    <Container
                        style={{
                            width: '100%',
                            backgroundColor: "lightblue",
                            padding: '2rem',
                            marginTop: '-2rem'
                        }}
                    >
                        <Header 
                            as='h1' 
                            style={{
                                color: 'dimgrey'
                            }}>
                            Search Animals
                        </Header>
                        <SearchBar 
                            value={this.props.searchTerm} 
                            changeHandler={this.props.searchHandler} 
                            sortAlphabetically={this.sortAlphabetically} 
                            sortStatus={this.sortStatus} 
                            alpha={this.state.alpha}
                        />
                    </Container>
                    <Container>
                        <Grid style={{paddingTop: '2rem'}}>
                            {this.makeGrid()}
                        </Grid>
                    </Container>
                </>
            :
                <Redirect to="/"/>
            }
            </>
        )
    }
}

export default AnimalList