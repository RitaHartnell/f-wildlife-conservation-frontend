import React, { Component } from 'react'
import {Header, Button, Progress, Segment, Embed } from 'semantic-ui-react'
import youtube1 from '../Assets/youtube1.png'
import youtube3 from '../Assets/youtube3.png'

class TakeAction extends Component {
    state = { 
        percent: 33
    }
  
    increment = () =>
      this.setState((prevState) => ({
        percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
      }))

    render() {
      return (
        <div>
            <Header as='h1' style={{color: 'dimgrey'}}>Donation Goal</Header>
            <Progress percent={this.state.percent} indicating progress />
                <Header as='h2' style={{color: 'dimgrey'}}>How can you help?</Header>
            <Segment.Group>
            <Segment as='h3' inverted color='blue' style={{color: 'dimgrey'}}>Write to Congress and your local government </Segment>
            <Segment as='h3' inverted color='blue' secondary style={{color: 'dimgrey'}}>Run a marathon. Plan a community project. Join a Fundraiser.</Segment>
            <Segment as='h3' inverted color='blue' tertiary style={{color: 'dimgrey'}}>And above all else... Donate!</Segment>
            </Segment.Group>
            <Header as='h3' color='blue' style={{color: 'dimgrey', paddingTop: '30px'}}> Not convinced? Watch these videos </Header>
            <Segment.Group horizontal>
            <Segment color='teal'>
            <Header as='h3'>Australia’s wildlife needs your help!</Header>
                <Segment>
                <Embed
                id='GdtQQFjQJjA'
                placeholder={youtube1}
                source='youtube'
                />
                </Segment>
            </Segment>
            <Segment color='teal'>
                <Header as='h3'>Why thousands of Whales Die Every Year!</Header>
                <Segment>
                    <Embed
                    id='skVKgSbve9I'
                    placeholder={youtube3}
                    source='youtube'
                    />
                </Segment>
            </Segment>
            </Segment.Group>
            <Button onClick={this.increment}>Donate!</Button>
            <Segment>Thank you for your Support!</Segment>
        </div>
      )
    }
}  

export default TakeAction