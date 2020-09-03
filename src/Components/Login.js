import React from 'react'

class Login extends React.Component{
    state = {
        username:"",
        password:""
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler} />
                <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
                <input type="submit" value="log in" />
            </form>
        )
    }
}

export default Login