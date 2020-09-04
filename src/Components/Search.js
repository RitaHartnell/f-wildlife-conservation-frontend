import React from 'react'

function Search (props){
    return (
            <div>
                    <input
                        type="text"
                        placeholder={"Search for Animals!"}
                        value={props.value}
                        onChange={props.changeHandler}/>

                  <strong>Sort by:</strong>
                  <label>
                    <input type="radio" value="Alphabetically" checked={props.alpha ? true : false} onChange={() => {props.sortAlphabetically()}}/>
                    Alphabetically
                  </label>
                  <label>
                    <input type="radio" value="Status" checked={props.alpha ? false: true} onChange={() => {props.sortStatus()}}/>
                    Status
                  </label>
            </div>
    )
}

export default Search