import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [conins, setCoins] = useState([]);
  useEffect( () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  return (
    <div>
     <h1>The Coins! ({conins.length})</h1>
     {loading ? <strong>Loading...</strong> : null}
     <ul>
       {conins.map( (item, index) => 
        <li key={index}>{item.name} ({item.symbol}) : {item.quotes.USD.price}</li> )}
     </ul>
    </div>  
  );
}

export default App;
