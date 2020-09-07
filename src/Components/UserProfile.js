import React from 'react'
import FavoriteAnimals from '../Containers/FavoriteAnimals'
import {Redirect} from 'react-router-dom'
import myDefault from '../Assets/default.png'

class UserProfile extends React.Component {

    state = {
        animals: this.props.user !=null ? this.props.user.user.animals : [],
        searches: this.props.user !=null ? this.props.user.user.searches : [],
        bio: this.props.user !=null ? this.props.user.user.bio : '',
        avatar: this.props.user !=null ? this.props.user.user.avatar : ''
    }

    updateUser = () => {
        const api = 'http://localhost:3000/api/v1/users'
        let user = {
            username: this.props.user.user.username,
            bio: this.state.bio,
            avatar: this.state.avatar
        }

        fetch(api,
            {
                method: 'PATCH',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json'
                }
            })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    updateBio = (e) =>{
        let bio = e.target.value
        this.setState({bio: bio}, this.updateUser())
    }

    updateAvatar = (e) => {
        let avataURL = e.target.value
        this.setState({avatar: avataURL}, this.updateUser())
    }

    render () {  
        
        return (
        <>
        {this.props.user != null ?    
    
            <div>
                {/*I am going to render my favorites here !*/}
                <div>
                    {console.log(this.props.user.user)}
                    <h3>{this.props.user.user.username}'s profile</h3>
                    {
                        this.state.avatar != null ?
                            <img src={this.state.bio} />
                        : <img src={myDefault}/>
                    }
                    <button>edit avatar</button>
                </div>
                <div>
                    <h4>BIO</h4>
                    <p>
                        {
                            this.state.bio !=null ?
                                this.state.bio
                            : 
                            ""
                        }
                    </p>
                    <button>edit bio</button>
                </div>
                {
                    this.state.animals != null ?
                        <FavoriteAnimals animals={this.state.animals}/>
                    : <h3>You have no favorites!</h3>
                }
            </div>
        :

        <Redirect to="/"/>
        }
        </>
        )
    }
}

export default UserProfile