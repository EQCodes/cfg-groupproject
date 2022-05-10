import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from '../../NavBar';
import AddItem from './AddItem';
import Item from "./ListBody/Item";
import ListItems from "./ListBody/ListBody"
import "../../../../src/styles/YourList.css"

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
    <div className="app">
      <nav>
        <NavBar/>
      </nav>
      <AddItem 
        inputValue={inputValue}
        setInputValue={setInputValue}
        items={items}
        setItems={setItems}
        itemCategory={itemCategory}
        setItemCategory={setItemCategory}
      />
      <ListItems
        items={items}
        setItems={setItems}
      />
    </div>
  );
};

export default YourList;
