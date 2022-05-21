import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase-config";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";



function DisplayCategories(props) {
  const [myListCategories, setMyListCategories] = useState([])

  useEffect(() => {
    const getMyListCategories = async () => {
      const q = query(collection(db,  "trips/"+props.theTrip+"/categories"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const theCategories = [];
        querySnapshot.forEach((doc) =>{
          theCategories.push({...doc.data(), id:doc.id});
        });

        setMyListCategories(theCategories);
      });
  };
  if(props.theTrip !== ""){
    getMyListCategories();
  }
}, [props.theTrip]);

  const deleteTheCategory = async(id) => {
    await deleteDoc(doc(db, "trips/"+props.theTrip+"/categories", id));
  };

  return (
    <>
        {myListCategories.map((category, i) => {
          return <div key={i}>
            <>{category.CategoryName}</> <button onClick={() => deleteTheCategory(category.id)}>x</button>
          </div>
        })}
    </>
  );
}

export default DisplayCategories;
