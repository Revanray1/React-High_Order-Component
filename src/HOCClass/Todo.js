import { useEffect } from "react";
import { useState } from "react"
import HOC from './HOC'


const Todo = ({data}) => {
    // const [todos, setTodos] = useState([]);
    // const [term, setTerm] = useState("");
    // useEffect(() => {
    //     const userData = async () => {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    //         const json = await res.json();
    //         setTodos(json);

    //         console.log(json)
    //     }
    //     userData();

    // }, [])

    let renderedTodo = data.slice(0,10).map((user) => {
        return <div key={user.id}>
            <p>{user.title}</p>
        </div>
    })

    // let filteredTodos = todos.slice(0,10).filter(({title})=>  title.indexOf(term) >= 0).map((todo) => {
    //     return <div key={todo.id}>
    //         <p>{todo.title}</p>
    //     </div>
    // })



    return (<div>
   
        <div>
            {renderedTodo}
        </div>
    </div>)

}

const SearchTodos = HOC(Todo,"todos")
export default SearchTodos;