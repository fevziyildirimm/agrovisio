import React, { useState } from "react";
import "./App.css";
import toDoList from './data'

function App() {
  const [keyLogger, setKeyLogger] = useState<Number>(-1);
  const [searchItem, setSearchItem] = useState<String>("");



  function onClickHandler(key: number) {
    if (keyLogger === key) setKeyLogger(-1);
    else setKeyLogger(key);
  }

  return (
    <div className="App App-header">
      <input
        placeholder="Searh Item"
        type="text"
        className="textbox"
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {toDoList.map((toDoItem, key) => {
        if (searchItem.length === 0) {
          
          return null;
        }
        if (
          toDoItem.title.substring(0, searchItem.length).toLowerCase() ===searchItem.toLowerCase()) 
          {
          return (
            <div
              key={key}
              className={key === keyLogger ? "style1" : "style2"}
              onClick={() => onClickHandler(key)}>
              <h3>{toDoItem.title}</h3>
              <h4>{toDoItem.message}</h4>
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
