import React from 'react'
import logo2 from '../logo/Flatiron Wildlife Conservation Logo.png'
import {Image, Grid, Header, Container, Embed} from 'semantic-ui-react'
import placeholder from '../Assets/youtube thingie.jpg'

const Home = () => {
    return (
        <Grid
            style={{
                paddingTop: '0rem',
                marginTop: '-2rem'
            }}
        >
            <Grid.Row 
                textAlign='center' 
                style={{
                    backgroundColor: "lightblue"
                }}
            >
                <Container>
                    <Image
                        src={logo2}
                        centered
                    />
                    <Header as='h2' style={{color: 'dimgrey'}}>We Protecc Animals</Header>
                </Container>
            </Grid.Row>
            <Grid.Row textAlign='center'>
                <Container>
                    <Header as='h2'>Here's a video of cute baby animals to make you understand whats at stake</Header>
                    <Embed
                        id='SA-JIJbcE2k'
                        placeholder={placeholder}
                        source='youtube'
                    />
                </Container>
            </Grid.Row>
            <Grid.Row textAlign='center' columns={2}>
                <Grid.Column>
                    <Container text>
                        <Header as='h3'>About Us</Header>
                        <p>
                            Founded in 19⌧ꁦ, we are an organization dedicated to the preservation of endangered species all across the world. Our founders vision was and is to support the habitiats and populations of venerable and endangered species around the world.
                        </p>
                    </Container>
                </Grid.Column>
                <Grid.Column>
                    <Container text>
                        <Header as='h3'>Our Mission</Header>
                        <p>
                            We wish to put an end to poaching and other forms of cruelty that threaten species once and for all. To that end, we direct funding to local conservation efforts as well as to programs that provide people who rely on poaching for their livelihood alternative income sources so they don't have to resort to that horrible practice in the first place.
                        </p>
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Home