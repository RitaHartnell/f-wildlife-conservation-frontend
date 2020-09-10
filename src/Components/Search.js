import React from 'react'
import {Container, Search, Form} from 'semantic-ui-react'

function SearchBar (props){
  return (
    <Container>
      <Search
          input={{ fluid: true }}
          type="text"
          placeholder={"Search for Animals!"}
          showNoResults={false}
          value={props.value}
          onSearchChange={props.changeHandler}
      />
      <br/>
      <Container>
        <Form
          style={{
            color: 'dimgrey'
          }}
        >
          <Form.Group inline>
            <label>Sort:</label>
            <Form.Radio 
              label="Alphabetically" 
              value="Alphabetically"
              name='sortBy'
              checked={props.alpha ? true : false} 
              onChange={() => {props.sortAlphabetically()}}
            />
            <Form.Radio 
              label="By Status" 
              value="Status" 
              name='sortBy'
              checked={props.alpha ? false: true} 
              onChange={() => {props.sortStatus()}}
            />
          </Form.Group>
        </Form>
      </Container>
    </Container>
  )
}

export default SearchBar