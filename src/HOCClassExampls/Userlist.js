import { useEffect } from "react";
import { useState } from "react"
import HOC from './HOC'

const Userlist = ({  data ,handleChange ,term }) => {

    let filteredUsers = data.filter(({ name }) => name.indexOf(term) >= 0).map((user) => {
        return <div key={user.id}>
            <p>{user.name}</p>
        </div>
    })
console.log(term)

    return (<div>
        <input type="text" value={term} onChange={(e) => handleChange(e)}></input>

        <div>
            {filteredUsers}
        </div>
    </div>)

}


export default HOC(Userlist,"users");