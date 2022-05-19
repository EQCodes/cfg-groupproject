import AddItem from "../AddItem";
import Item from "./Item";


import React, { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";

function ListBody(props) {
  const [myListCategories, setMyListCategories] = useState([])
  const myListCategoriesCollectionRef = collection(db, "myListCategories");
  
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

  if(props.theTrip != ""){
    getMyListCategories();
  }
  
  }, [props.theTrip]);

  const deleteTheItem = (i, j) => {
    let temp_state = [...myListCategories];

    let temp_element = {...temp_state[i]};

    temp_element.CategoryItems.splice(j,1);

    temp_state[i] = temp_element;

    setMyListCategories(temp_state);
  };

  const checkTheItem = (i, j) => {
    let temp_state = [...myListCategories];

    // 2. Make a shallow copy of the element you want to mutate
    let temp_element = { ...temp_state[i] };
    
    // 3. Update the property you're interested in
    temp_element.CategoryItems[j].Completed = !temp_element.CategoryItems[j].Completed;
    
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    temp_state[i] = temp_element;
    
    // 5. Set the state to our new copy
    setMyListCategories( temp_state );
  }

  return (
    <>
        {myListCategories.map((category, i) => {
          return <div key={i}>
            <h4>{category.CategoryName}</h4>
            <AddItem category={category.id} theTrip={props.theTrip} />
            <>{category.CategoryItems.map((item, j) => {
              return <div key={j}>
                {item.ItemName} ,{item.Completed == true ? <>completed</> : <>not completed</>} <button onClick={()=> checkTheItem(i,j)}>check</button> <button onClick={() => deleteTheItem(i, j)}>x</button>
                {/* <Item item={item.id} itemName={item.ItemName} completed={item.Completed} /> */}
              </div>
            })}</>
          </div>
        })}
    </>
  );
}

export default ListBody;


//import CategoriesDict2 from "../Categories";

// var categoriesDictThree = {
//   category1: "clothes3",
//   category2: "electrics3",
// };

// function ListItems(props) {
//   function deleteCategory() {
//     //delete category in firebase
//   }

//   function deleteItem() {
//     //delete item in firebase
//   }
//   return (
//     // <div>
//     //   <ul>
//     //     {items.map((item) => (
//     //       <Item
//     //         items={items}
//     //         setItems={setItems}
//     //         text={item.item}
//     //         key={item.id}
//     //         item={item}
//     //       />
//     //     ))}
//     //   </ul>
//     //   {Object.entries(categoriesDictThree).map(([key, value]) => (
//     //     <h1 key={key}>{value}</h1>
//     //   ))}
//     //   {/* HARD CODED
//     //        category is based off category name - so if same categories then would show up twice!
//     //        need to find way to replace hard coded electrics with dynamic!
//     //        */}

//     //   <div>
//     //     {items
//     //       .filter((item) => item.category == "electrics3")
//     //       .map((filteredItem) => (
//     //         <li>{filteredItem.item}</li>
//     //       ))}
//     //   </div>
//     // </div>
//     <div className="your-list-card">
//       <div className="row">
//         <div className="col-11">
//           <h3>{props.data.catName}</h3>
//         </div>
//         <div className="col-1">
//           <button onClick={deleteCategory}>X</button>
//         </div>
//       </div>
//       {props.data.item.map((items) => (
//         <div className="row">
//           <div className="col-11">
//             <h6>{items.itemName}</h6>
//           </div>
//           <div className="col-1">
//             <button onClick={deleteItem}>X</button>
//           </div>
//         </div>
//       ))}
//       <AddItem />
//     </div>
//   );
// }

// export default ListItems;
