import { useEffect } from "react";
import { useState } from "react"
import HOC from './HOC'

const Todo = ({ data ,handleChange ,term}) => {

    let filteredTodos = data.filter(({title})=>  title.indexOf(term) >= 0).map((todo) => {
        return <div key={todo.id}>
            <p>{todo.title}</p>
        </div>
    })

console.log(term)
    
    return (<div>
        <input type="text" value={term}  onChange={(e)=>handleChange(e)}></input>

        <div>
            {filteredTodos}
        </div>
    </div>)

}

export default HOC(Todo,"todos");