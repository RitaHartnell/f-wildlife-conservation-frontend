import React from 'react'
import { Button, Form, Grid, Header, Message, Image, Segment } from 'semantic-ui-react'
import logo192 from '../logo192.png'

class Signup extends React.Component{
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
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src={logo192} /> Log-in to your account
                </Header>
                <Form size='large' onSubmit={this.submitHandler}>
                    <Segment stacked>
                    <Form.Input fluid name="username" icon='user' iconPosition='left' placeholder='username' onChange={this.changeHandler}/>
                    <Form.Input
                        fluid
                        name="password"
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={this.changeHandler}
                    />
            
                    <Button color='teal' fluid size='large' type='submit'>
                        Sign Up
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    Have an account? <a href='login'>Log In</a>
                </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Signup