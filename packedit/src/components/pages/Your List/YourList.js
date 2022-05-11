import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";
import AddItem from "./AddItem";
import Item from "./ListBody/Item";
import ListItems from "./ListBody/ListBody";
import "../../../../src/styles/YourList.scss";

const YourList = ({ categoryarray }) => {
  // Setting states
  const [isLoading, setIsLoading] = useState(true);
  //This captures the user input
  const [inputValue, setInputValue] = useState("");
  //Used to hold the items
  const [items, setItems] = useState([]);
  //Used for categories
  const [itemCategory, setItemCategory] = useState("");
  //const [itemCategory, setItemCategory] = useState([categoryarray[1]]);

  useEffect(() => {
    //load firebase data here
    //after receiving data, set isLoading to false
    setIsLoading(false);
  }, []);

  //Ternary operator to display data appropriately
  //If isLoading === true, page is still loading
  //If isLoading === false, display data
  return isLoading ? (
    <div>
      <h2>Data Loading...</h2>
    </div>
  ) : (
    <div>
      <div>
        <nav>
          <NavBar />
        </nav>
      </div>
      <div>
        <AddItem
          inputValue={inputValue}
          setInputValue={setInputValue}
          items={items}
          setItems={setItems}
          itemCategory={itemCategory}
          setItemCategory={setItemCategory}
        />
        <ListItems items={items} setItems={setItems} />
      </div>
    </div>
  );
};

export default YourList;
