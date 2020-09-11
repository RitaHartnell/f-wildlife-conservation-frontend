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
      <Grid 
        columns='equal' 
        style={{
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}
      >
        <Grid.Row color='black' textAlign='center'>
          <Grid.Column>
            <Segment inverted>
              <p>News</p>
              <p>Branding</p>
              <p>Terms of Use</p>
              <p>© F Wildlife Conservation</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group>
              <Segment inverted color='black'>
                <img className="Github" src={github1} alt="Frontend" onClick={() => handleClick("FE")} />
              </Segment>
              <Segment inverted>GitHub FE</Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group>
              <Segment inverted color='black'>
                <img className="Github" src={github1} alt="Backend" onClick={() => handleClick("BE")} />
              </Segment>
              <Segment inverted>GitHub BE</Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group>
              <Segment inverted color='black'>
                <img className="Github" src={email} alt="email"/>
              </Segment>
              <Segment inverted>Email Us</Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group>
              <Segment inverted color='black'>
                <img className="Donate" src={donate} alt="donate"/>
              </Segment>
              <Segment inverted>
                <p className='padding'></p>
                Donate
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>    
    )
}
  
export default Footer;