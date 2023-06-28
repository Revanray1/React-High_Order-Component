import React from 'react'

const HOC =(NewComponent,Details)=>{
    return class extends React.Component{
        state={
            data:[],
            term:"",
        };
        componentDidMount(){
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${Details}`);
                const json = await res.json();
                this.setState({...this.state,data:json});
            };
            fetchData();
        }
        render(){
            let{term,data}=this.state;

            let filteredData = data.filter((d)=>
            {
                if(Details ==="users"){
                    const {name} = d;
                   return  name.indexOf(term) >= 0
                }
                if(Details ==="todos"){
                    const {title} = d;
                   return  title.indexOf(term) >= 0
                }
            })

            return(
                <div>
                    <h2>{Details}</h2>
                    <input type="text" value={term} onChange={(e) => this.setState({...this.state,term:e.target.value})}></input>
                    <NewComponent data={filteredData} />
                </div>
            )
            
        }
    }

}
export default HOC;

