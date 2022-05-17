import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "react-widgets/cjs/Input";
import { db } from "../../../Firebase/firebase";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";
import { async } from "@firebase/util";
import Item from "./listBody/Item";

function AddItem(props) {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const userCollectionRef = collection(db, "items");


  useEffect(() => {
    const getItems = async()=>{
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const theItems = [];
      querySnapshot.forEach((doc) => {
        theItems.push({ ...doc.data(), id: doc.id});
      });
      setItems(theItems);
    });
  };

  getItems();
 }, []);


  const addItem = async() => {
    await addDoc(userCollectionRef, {item: input});

    setInput("");
  }

  return (
    <div>
      <Input value={input}
      onChange = {(event) => setInput(event.target.value)}></Input>
      <Button
        disabled={!input}
        onClick={addItem}
        variant="contained"
        color="success"
         >
        ADD Items
      </Button>
      <ul>
        {items.map((item)=> (
          <>
          <Item key={item.id} theItem = {item} />
          </>
        ))}
      </ul>
    </div>
  );
}

export default AddItem;

// var categoriesDict = {
//   category1: "clothes",
//   category2: "electrics",
// };

// // this component is for users to add an item to one of their categories
// // const AddItem = ({
// //   inputValue,
// //   setInputValue,
// //   items,
// //   setItems,
// //   itemCategory,
// //   setItemCategory,
// // }) => {
// //   const inputValueHandler = (e) => {
// //     setInputValue(e.target.value);
// //   };

// //   const submitItemHandler = (e) => {
// //     e.preventDefault();
// //     setItems([
// //       ...items,
// //       {
// //         item: inputValue,
// //         packed: false,
// //         category: itemCategory,
// //         id: Math.random() * 1000,
// //       },
// //     ]);
// //     setInputValue("");
// //   };

// //   const itemCategoryHandler = (e) => {
// //     // does drop down list have 'select item: on first opening?
// //     //if so need if statement here that doesn't allow tha to to be saved as category
// //     setItemCategory(e.target.value);
// //     /*         setCategory([
// //             ...category, 
// //             {category: e.target.value, id: Math.random() * 1000},
// //         ]); */
// //   };

// //   return (
// //     <div>
// //       <p>Placeholder for add button</p>
// //       <form>
// //         <input value={inputValue} onChange={inputValueHandler}></input>
// //         <button onClick={submitItemHandler} type="submit">
// //           Add item
// //         </button>
// //         <div>
// //           {/* Doesn't set first item as first category. */}
// //           <select onChange={itemCategoryHandler} name="category">
// //             {Object.entries(categoriesDict).map(([key, value]) => (
// //               <option key={key}>{value}</option>
// //             ))}
// //             );
// //           </select>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// export default AddItem;
