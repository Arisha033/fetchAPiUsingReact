import { useState } from "react";
import { useEffect } from "react";

/* (Out)Side Effect is any code you want to run that React is not in charge of handling.
eg: -local storage
-Api call
-websockets subscription 
-syncing 2 states

fetching data from an api is consider to be a (out)side effect.*/
function App() {
  const [count, setCount] = useState(1);
  const [apiData, setApiData] = useState({});

  //  console.log("Component rendered")

  useEffect(() => {
    // console.log("Effect rendered")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, [count]);
   
  // function to increment count
  function handleCount() {
    setCount((prevCount) => {
      return (prevCount = prevCount + 1);
    });
  }

  return (
    <>
      <h2>Count is: {count}</h2>
      <button onClick={handleCount}>Get Next Character</button>
      <pre>
        API Data:
        {JSON.stringify(apiData, null, 4)}
      </pre>
    </>
  );
}

export default App;

