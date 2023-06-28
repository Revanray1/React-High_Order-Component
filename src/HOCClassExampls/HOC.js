import React from 'react'
import { useEffect } from "react";
import { useState } from "react"


const UpdatedComponent = (OriginalComponent,data) => {
    function NewComponent(){
        const [todos, setTodos] = useState([]);
        const [term, setTerm] = useState("");

    
        const handleChange = (e) => {
            setTerm(e.target.value)
        }
  

        useEffect(() => {
            const userData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${data}`);
                const json = await res.json();
                setTodos(json);  
            }
            userData();
    
        }, [])
        return <OriginalComponent handleChange={handleChange} data={todos} term={term} />
    
    }
    return NewComponent;
   
}

export default UpdatedComponent;





// const HOC =(NewComponent,Details)=>{
    
//     return class extends React.Component{
//         state={
//             data:[],
//             term:"",
//         };
//         componentDidMount(){
//             const fetchData = async () => {
//                 const res = await fetch(`https://jsonplaceholder.typicode.com/${Details}`);
//                 const json = await res.json();
//                 this.setState({...this.state,data:json});
//             };
//             fetchData();
//         }
//         render(){
//             let{term,data}=this.state;

//             let filteredData = data.filter((d)=>
//             {
//                 if(Details ==="users"){
//                     const {name} = d;
//                    return  name.indexOf(term) >= 0
//                 }
//                 if(Details ==="todos"){
//                     const {title} = d;
//                    return  title.indexOf(term) >= 0
//                 }
//             })

//             return(
//                 <div>
//                     <h2>{Details}</h2>
//                     <input type="text" value={term} onChange={(e) => this.setState({...this.state,term:e.target.value})}></input>
//                     <NewComponent data={filteredData} />
//                 </div>
//             )
            
//         }
//     }

// }
// export default HOC;

