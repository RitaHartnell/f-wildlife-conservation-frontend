import React from 'react'

function Search (props){
    return (
        <div>
            {/*I am responsible for dynamically filtering on the animal list*/}
            <input
                type="text"
                placeholder={"Search for Animals!"}
                onChange={/*will add function here*/  nil}
            />
        </div>
    )
}

export default Search