import React, { useState } from "react";
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Button,
  } from "@mui/material";

import {
    collection,
    query,
    where,
    getDocs,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot,
  } from "firebase/firestore";

  import { db } from "../../../../Firebase/firebase";
// import { async } from "@firebase/util";
// import List from "react-widgets/cjs/List";

function Item(props){
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");
    const userCollectionRef = collection(db, "items");

    const[modify, setModify] = useState(false);
    const[newItem, setNewItem] = useState(props.theItem.item);

    const editItem = async (id) => {
        const userDoc = doc(db, "items", id);
        await updateDoc(userDoc, {item: newItem});
        setModify(!modify);
    };

    const deleteItem = async (id) => {
        const userDoc = doc(db, "items", id);
        await deleteDoc(userDoc);
    };

    const modifyItem = ()=> {
        setModify(!modify);
    };


return (
        <>
    {modify ? (
        <List className="item_list">
            <ListItem>
            <ListItemAvatar></ListItemAvatar>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <Button
              onClick={() => {
                editItem(props.theItem.id);
              }}
              variant="contained"
              color="success"
            >
              Confirm
            </Button>
          </ListItem>
        </List>
    ): (
        <List className="item_list">
          <ListItem>
            <ListItemAvatar></ListItemAvatar>
            <ListItemText
              primary={props.theItem.item}
              secondary="Dummy deadline"
            />
          </ListItem>
          {/* <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button> */}
        </List>
    )}
     <Button
        onClick={() => {
          modifyItem();
        }}
      >
        {" "}
        Modify Me{" "}
      </Button>

      <Button
        onClick={() => {
          deleteItem(props.theItem.id);
        }}
      >
        {" "}
        Delete Me{" "}
      </Button>
        </>
    );
}
 
export default Item;

// const Item = ({ item, text, items, setItems }) => {
//     //events
//     const packItemHandler = () => {
//     setItems(items.map(item1 => {
//         if(item1.id === item1.id) {
//             return {
//                 ...item1, packed: !item1.packed
//             }
//         }
//         return item1;
//         })
//     );
// };

// const deleteItemHandler = () => {
//     setItems(items.filter((el) => el.id !== item.id));
// };


// return (
//     <div className="item">
//         <button  onClick={packItemHandler}> Complete</button>
//         <li >{text}</li>
//         <button  onClick={deleteItemHandler}> Delete </button>
//         </div>
//     );
// }

// export default Item;