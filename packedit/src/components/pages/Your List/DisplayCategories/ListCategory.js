import React, { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";
import { async } from "@firebase/util";
import Button from 'react-bootstrap/Button';

function ListCategory(props) {
    const [input, setInput] = useState("");
    const myListCategoriesCollectionRef = collection(db, "myListCategories");
    
    const deleteTheCategory = async(id) => {
      await deleteDoc(doc(db, "myListCategories", id));
    };

  return (
    <div>
    {props.myListCategories.map((category)=> (
      <>
      <div>{category.CategoryName}</div>
      <button onClick={()=> deleteTheCategory(category.id)}>X</button>
      </>
    ))}
    </div>
  )
}

export default ListCategory