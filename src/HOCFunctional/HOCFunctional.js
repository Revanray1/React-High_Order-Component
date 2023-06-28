import { useEffect } from "react";
import { useState } from "react"



const UpdatedComponent = (OriginalComponent) => {
    function NewComponent(){
        const [money, setMoney] = useState(1);

        const handleMoney = () => {
            setMoney(money + 3)
        };
        return <OriginalComponent handleMoney={handleMoney} money={money} />
    
    }
    return NewComponent;
   
}

export default UpdatedComponent;