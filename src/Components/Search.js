import React from 'react'
import {Redirect} from 'react-router-dom'

function Search (props){
    return (
        <>
        {props.user ?    
            <div>
                {/*I am responsible for dynamically filtering on the animal list*/}
                <input
                    type="text"
                    placeholder={"Search for Animals!"}
                    onChange={/*will add function here*/  null}
                />
            </div>
        :
            <Redirect to="/"/>
        }
        </>
    )
}

export default Search