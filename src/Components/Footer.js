import React from 'react';
import github1 from '../logo/github1.svg';
import email from '../logo/email.svg';
import donate from '../logo/donate.png';
import '../style/Footer.css';
import { Grid, Segment } from 'semantic-ui-react'

function Footer () {
    const handleClick = (val) => {
        if(val === "FE"){
            window.open(`https://github.com/RitaHartnell/f-wildlife-conservation-frontend`)
        }else if(val === "BE"){
            window.open(`https://github.com/hahm-d/f-wildlife-conservation-backend`)    
        }
    }
    return (
        <Grid columns='equal' divided inverted padded>
        <Grid.Row color='black' textAlign='center'>
          <Grid.Column>
            <Segment color='white' inverted>
            <img className="Github" src={github1} alt="Frontend" onClick={() => handleClick("FE")} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color='white' inverted>
            <img className="Github" src={github1} alt="Backend" onClick={() => handleClick("BE")} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color='white' inverted>
            <img className="Github" src={email} alt="email"/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color='white' inverted>
            <img className="Donate" src={donate} alt="donate"/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row color='black' textAlign='center'>
            <Grid.Column>GitHub FE</Grid.Column>
            <Grid.Column>GitHub BE</Grid.Column>
            <Grid.Column>Email Us</Grid.Column>
            <Grid.Column>Donate</Grid.Column>
        </Grid.Row>
      </Grid>    
    )
}
  
export default Footer;