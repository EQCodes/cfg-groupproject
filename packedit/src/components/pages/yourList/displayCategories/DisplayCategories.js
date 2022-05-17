import AddCategory from "./AddCategory";
import ListCategory from "./ListCategory";
import React, { useState, useEffect } from "react";
import { db } from "../../../../Firebase/firebase";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";

function DisplayCategories(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async()=>{
    const q = query(collection(db, "categories"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const theCategories = [];
      querySnapshot.forEach((doc) => {
        theCategories.push({ ...doc.data(), id: doc.id});
      });
      setCategories(theCategories);
    });
  };

  getCategories();
 }, []);


  return (
    <div>
      <h1>List Categories</h1>
      <ListCategory categories={categories}/>
      <AddCategory />
    </div>
  );
}

export default DisplayCategories;
