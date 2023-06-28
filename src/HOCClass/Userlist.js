// import { useEffect } from "react";
// import { useState } from "react"
import HOC from './HOC'

const Userlist = ({data}) => {
    // const [users, setUsers] = useState([]);
    // const [term, setTerm] = useState("");
    // useEffect(() => {
    //     const userData = async () => {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const json = await res.json();
    //         setUsers(json);

    //         console.log(json)
    //     }
    //     userData();

    // }, [])

    let renderedUser = data.map((user) => {
        return <div key={user.id}>
            <p>{user.name}</p>
        </div>
    })

    // let filteredUsers = users.filter(({ name }) => name.indexOf(term) >= 0).map((user) => {
    //     return <div key={user.id}>
    //         <p>{user.name}</p>
    //     </div>
    // })



    return (<div>
        <div>
            {renderedUser}
        </div>
    </div>)

}

const SearchUseres = HOC(Userlist,"users")

export default SearchUseres;
