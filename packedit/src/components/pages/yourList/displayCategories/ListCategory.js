import React, { useState, useEffect } from "react";
import { db } from "../../../../Firebase/firebase";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";
import { async } from "@firebase/util";
import Item from "../listBody/Item";

function ListCategory(props) {
    const [input, setInput] = useState("");
    const userCollectionRef = collection(db, "categories");
  


   const deleteTheCategory = async(id) => {
      await deleteDoc(doc(db, "categories", id));
   };

    return (
      <div>
          {props.categories.map((category)=> (
            <>
              <div>{category.name}</div><button onClick={() => deleteTheCategory(category.id)}>x</button>
            </>
          ))}
        {/* <button>Add Category</button> */}
      </div>
    );
  }
  
  export default ListCategory;