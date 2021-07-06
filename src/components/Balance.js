import { useEffect, useState } from "react";

const Balance = () => {
    const[balance, setBalance] = useState([]);
    
    useEffect(() => {
        const getBalance = async () => {
            try 
            {
                const response = await fetch("/lunoBalance");
                if(response.ok) {
                    const json = await response.json();
                    setBalance(json.balance);
                }
            }
            catch(error) {
                console.error(error);
            }
        };

        getBalance();
    }, []);

    return (<div><ul>{balance.map(x => {
        return <li key={x.account_id}>{x.balance} {x.asset}</li>
    })}</ul></div>)
}
export default Balance;