import React, { useState, useEffect } from "react";
import { db } from "../../../../Firebase/firebase";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";
import { async } from "@firebase/util";

function AddCategory(props) {

  const [adding, setAdding] = useState(false);
  const [input, setInput] = useState("");
  const userCollectionRef = collection(db, "categories");


  const AddCategory = () => {
    setAdding(!adding);
  }

  const AddtheCategory = async() => {
    await addDoc(userCollectionRef, {name: input});

    setInput("");
    setAdding(false);
  }

  return adding ? (
     <>
      {/* <div>Adding now</div>  */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
      <button onClick={AddtheCategory} disabled={input.length == 0}>Confirm</button>
      <button onClick={AddCategory}>Cancel</button>
     </>
    )
    : 
    (
    <div>
      <button onClick={AddCategory}>Add Category</button>
    </div>
  );
}

export default AddCategory;
