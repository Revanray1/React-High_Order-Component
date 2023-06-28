import { useEffect } from "react";
import { useState } from "react"
import HOC from './HOCFunctional'




const Person2 =({ money, handleMoney}) => {
    // const [money, setMoney] = useState(1);

    // const handleMoney=()=>
    // {
    //     setMoney(money+1)
    // }

    return (<div>
   
        <div>
            <h1>Person Two money is {money}</h1>
            <button onClick={handleMoney}>Increase money</button>
        </div>
    </div>)

}

export default HOC(Person2);