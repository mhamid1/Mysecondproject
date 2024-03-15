import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  function ViewDetail({id}){

  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>using JavaScript inbuilt FETCH API</h1>
      <center>
        {data.map((dataObj, index) => {
          <p>{dataObj.id}</p>
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'red' }}>{dataObj.id}</p>
              <p style={{ fontSize: 20, color: 'black' }}>{dataObj.title}</p>
              <button onClick={ViewDetail}>View Details</button>
            </div>
          );
        })}
      </center>
    </div>
  );
}
export default App;
