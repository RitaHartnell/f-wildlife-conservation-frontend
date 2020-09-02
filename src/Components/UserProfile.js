import React from 'react'
import FavoriteAnimals from '../Containers/FavoriteAnimals'

class UserProfile extends React.Component {

    state = {
        favorites: [],
        searches: []
    }

    render () {    
        return (
            <div>
                {/*I am going to render my favorites here !*/}
                <h2>I am user and I am here!</h2>
                <FavoriteAnimals/>
            </div>
        )
    }
}

export default UserProfile