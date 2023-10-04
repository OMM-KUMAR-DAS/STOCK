import React from 'react'
import { useState } from 'react';

const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6f6d57016dmshbbcd65ee1fa52dfp194fe4jsn8b6189ff2e08",
      "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
  };

const St=(props) => {

    return (
      <div className="cont">
        <h1>{props.item.symbol}</h1>
        <ul className="nam">
          <li>Open:{props.item.open}</li>
          <li>Today high:{props.item.dayHigh}</li>
          <li>Today low:{props.item.dayLow}</li>
          <li>Lastprice:{props.item.lastPrice}</li>
          <li>Previousclose:{props.item.previousClose}</li>
          <li>Yearhigh:{props.item.yearHigh}</li>
        </ul>
      </div>
    );
  }  

const Stock = () => {

    const [stock, setT] = useState([]);
    const[sear,setS]=useState("")
    const searc = async (event) => {
        event.preventDefault()
        const url =`https://latest-stock-price.p.rapidapi.com/price?Indices=${sear}`
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setT(result);
        } catch (error) {
          console.error(error);
        }
      };

      function Se(event)
      {
        setS((prev)=>event.target.value)
      }
    
      const ir = stock.map((item, index) => {
        return <St key={index} item={item} />
      });

  return (
    <main>
       <form>
            <select className="lo" onChange={Se} name="na" value={sear}>
              <option value="">--choose--</option>       
              <option value="NIFTY 50">NIFTY 50</option>
              <option value="NIFTY NEXT 50">NIFTY NEXT 50</option>
              <option value="NIFTY 100">NIFTY 100</option>
              <option value="NIFTY 200">NIFTY 200</option>
              <option value="NIFTY 500">NIFTY 500</option>
              <option value="NIFTY MIDCAP 50">NIFTY MIDCAP 50</option>
              <option value="NIFTY MIDCAP 100">NIFTY MIDCAP 100</option>
              <option value="NIFTY MIDCAP 150">NIFTY MIDCAP 150</option>
              <option value="NIFTY BANK">NIFTY BANK</option>
              <option value="NIFTY AUTO">NIFTY AUTO</option>
              <option value="NIFTY FMCG">NIFTY FMCG</option>
              <option value="NIFTY IT">NIFTY IT</option>
              <option value="NIFTY MEDIA">NIFTY MEDIA</option>
              <option value="NIFTY ENERGY">NIFTY ENERGY</option>
              <option value="NIFTY METAL">NIFTY METAL</option>
              <option value="NIFTY PHARMA">NIFTY PHARMA</option>
              <option value="NIFTY PSU BANK">NIFTY PSU BANK</option>
          </select>
          <button className="bt" onClick={searc}>search</button>
          
    </form>
    <div className="air">{ir}</div>
    
</main>
);
}

export default Stock