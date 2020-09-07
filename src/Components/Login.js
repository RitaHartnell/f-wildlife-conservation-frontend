import React from 'react'
import { Button, Form, Grid, Header, Message, Image, Segment } from 'semantic-ui-react'
import logo192 from '../logo192.png'

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
            // <form >
            //     <input type="text" name="username" placeholder="username" value={this.state.username}  />
            //     <input type="text" name="password" placeholder="password" value={this.state.password}  />
            //     <input type="submit" value="log in" />
            // </form>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src={logo192} /> Log-in to your account
                </Header>
                <Form size='large' onSubmit={this.submitHandler}>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='username' onChange={this.changeHandler}/>
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={this.changeHandler}
                    />
            
                    <Button color='teal' fluid size='large'>
                        Login
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='signup'>Sign Up</a>
                </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login