import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddItem from './AddItem';
//import categoryarray from './AddItem';




const YourList = ({ categoryarray } ) => {
  // Setting states
  //This captures the user input
  const [inputValue, setInputValue] = useState("");
  //Used to hold the items
  const [items, setItems] = useState([]);
  //Used for categories
  const [itemCategory, setItemCategory] = useState("");
  //const [itemCategory, setItemCategory] = useState([categoryarray[1]]);

  return (
    <div class="app">
      <p>List</p>
      <nav>
        <Link to="/">Home</Link> | <Link to="/your-list">Your List</Link>
      </nav>
      <AddItem 
      inputValue={inputValue}
      setInputValue={setInputValue}
      items={items}
      setItems={setItems}
      itemCategory={itemCategory}
      setItemCategory={setItemCategory}
      />
    </div>
  );
};

export default YourList;
