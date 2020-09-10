import React from 'react'
import {Redirect} from 'react-router-dom'
import myDefault from '../Assets/default.png'
import ProfileModal from '../ProfileModal'
import DeleteModal from '../DeleteModal'
import AnimalFCard from '../Components/AnimalFCard'

class UserProfile extends React.Component {

    render () {  
        console.log(this.props.animals)
        return (
        <>
        {this.props.user != null ?    
    
            <div>
                <div>
                    <h3>{this.props.user.user.username}'s profile</h3>
                    {
                        this.props.user.user.avatar != null ?
                            <img alt='' src={this.props.user.user.avatar} />
                        : <img alt='' src={myDefault}/>
                    }
                    <ProfileModal avatar={this.props.user.user.avatar} bio={this.props.user.user.bio} patchUser={this.props.patchUser} imgChange={this.props.imgChange} bioChange={this.props.bioChange}/>
                </div>
                <div>
                    <h4>BIO</h4>
                    <p>
                        {
                            this.props.user.user.bio !=null ?
                                this.props.user.user.bio
                            : 
                            ""
                        }
                    </p>
                </div>
                <DeleteModal deleteUser={this.props.deleteUser}/>
                {
                    this.props.animals != null ?
                    <div>
                        <h1>Favorite Animals</h1>
                        {this.props.animals.map(animalObj => < AnimalFCard key={animalObj.id} animal={animalObj} unfavoriteHandler={this.props.unfavoriteHandler}/>)}
                    </div>
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