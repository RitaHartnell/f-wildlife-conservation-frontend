import React from 'react'
import FavoriteAnimals from '../Containers/FavoriteAnimals'
import {Redirect} from 'react-router-dom'
import myDefault from '../Assets/default.png'
import ProfileModal from '../ProfileModal'
import DeleteModal from '../DeleteModal'

class UserProfile extends React.Component {

    state = {
        animals: this.props.user !=null ? this.props.user.user.animals : [],
        searches: this.props.user !=null ? this.props.user.user.searches : [],
        bio: this.props.user !=null ? this.props.user.user.bio : '',
        avatar: this.props.user !=null ? this.props.user.user.avatar : ''
    }

    patchUser = () => {
        const api = 'http://localhost:3000/api/v1/users/'
        const user = {
            username: this.props.user.user.username,
            avatar: this.state.avatar,
            bio: this.state.bio
        }

        fetch(`${api}${this.props.user.user.id}`,
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

    imgChange = (e) => {
        this.setState({avatar: e.target.value})
    }
    
    bioChange = (e) => {
        this.setState({bio: e.target.value})
    }


    render () {  
        
        return (
        <>
        {this.props.user != null ?    
    
            <div>
                {/*I am going to render my favorites here !*/}
                <div>
                    <h3>{this.props.user.user.username}'s profile</h3>
                    {
                        this.state.avatar != null ?
                            <img alt='' src={this.state.avatar} />
                        : <img alt='' src={myDefault}/>
                    }
                    <ProfileModal avatar={this.state.avatar} bio={this.state.bio} patchUser={this.patchUser} imgChange={this.imgChange} bioChange={this.bioChange}/>
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
                </div>
                {
                    this.state.animals != null ?
                        <FavoriteAnimals animals={this.state.animals}/>
                    : <h3>You have no favorites!</h3>
                }
                <DeleteModal deleteUser={this.props.deleteUser}/>
            </div>
        :

        <Redirect to="/"/>
        }
        </>
        )
    }
}

export default UserProfile