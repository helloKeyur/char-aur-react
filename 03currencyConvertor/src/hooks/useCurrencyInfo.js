import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    // on Currency Change
    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res.rates);
        });

        console.log(data);
    },[currency]);

    return data;
}

export default useCurrencyInfo;