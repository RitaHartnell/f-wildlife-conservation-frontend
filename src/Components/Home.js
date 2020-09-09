import React from 'react'
import logo2 from '../logo/Flatiron Wildlife Conservation Logo.png'
import {Image, Grid, Header} from 'semantic-ui-react'

const Home = () => {
    return (
        <Grid>
                <Image
                    src={logo2}
                    centered
                />
            <Grid.Row textAlign='center' columns={2}>
                <Grid.Column>
                    <Header as='h3'>About Us</Header>
                    <p>
                        Founded in 19⌧ꁦ, we are an organization dedicated to the preservation of endangered species all across the world. Our founders vision was and is to support the habitiats and populations of venerable and endangered species around the world.
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <Header as='h3'>Our Mission</Header>
                    <p>
                        We wish to put an end to poaching and other forms of cruelty that threaten species once and for all. To that end, we direct funding to local conservation efforts as well as to programs that provide people who rely on poaching for their livelihood alternative income sources so they don't have to resort to that horrible practice in the first place.
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Home