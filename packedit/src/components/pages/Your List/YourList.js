import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";
import AddItem from "./AddItem";
import Item from "./ListBody/Item";
import ListBody from "./ListBody/ListBody";
import "../../../../src/styles/YourList.scss";
import DisplayCategories from "./DisplayCategories/DisplayCategories";
import ListInfo from "./ListInfo";

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
    <div className="home-bg">
      <div className="container-fluid" style={{ paddingBottom: "7%" }}>
        <div className="row">
          <div className="col">
            <nav>
              <NavBar />
            </nav>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "170px", paddingLeft: "2%" }}>
          <div className="col-3 mx-5 your-list-card">
            <DisplayCategories />
          </div>
          <div className="col ml-5" style={{ paddingRight: "7%" }}>
            <div className="row your-list-info-card">
              <ListInfo />
            </div>
            <div className="row mt-3 your-list-card">
              <ListBody items={items} setItems={setItems} />
              <AddItem
                inputValue={inputValue}
                setInputValue={setInputValue}
                items={items}
                setItems={setItems}
                itemCategory={itemCategory}
                setItemCategory={setItemCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourList;
