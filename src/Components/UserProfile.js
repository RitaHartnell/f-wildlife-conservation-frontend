import React from 'react'
import FavoriteAnimals from '../Containers/FavoriteAnimals'
import {Redirect} from 'react-router-dom'

class UserProfile extends React.Component {

    state = {
        favorites: [],
        searches: []
    }

    render () {  
        console.log(this.props.user)  
        return (
        <>
        {this.props.user !== null ?    
    
            <div>
                {/*I am going to render my favorites here !*/}
                <h2>I am user and I am here!</h2>
                {null /*<FavoriteAnimals/> !*/}
            </div>
        :

        <Redirect to="/"/>
        }
        </>
        )
    }
}

export default UserProfile