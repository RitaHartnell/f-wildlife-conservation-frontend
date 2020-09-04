import React from 'react'
import FavoriteAnimals from '../Containers/FavoriteAnimals'
import {Redirect} from 'react-router-dom'

class UserProfile extends React.Component {

    state = {
        animals: this.props.user !=null ? this.props.user.user.animals : [],
        searches: this.props.user !=null ? this.props.user.user.searches : []
    }

    render () {  
        
        return (
        <>
        {this.props.user != null ?    
    
            <div>
                {console.log(this.state)} 
                {console.log(this.props.user.user.animals)}
                {/*I am going to render my favorites here !*/}
                <h2>I am user and I am here!</h2>
                {<FavoriteAnimals animals={this.state.animals}/>}
            </div>
        :

        <Redirect to="/"/>
        }
        </>
        )
    }
}

export default UserProfile