import React, { useState } from "react";
import { db } from "../Firebase/firebase-config";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import "../styles/styles.scss";

function AddItem(props) {
  const [adding, setAdding] = useState(false);
  const [newItem, setNewItem] = useState("");

  const addingItem = () => {
    setAdding(!adding);
  };

  const addItem = async (category) => {
    const categoryDoc = doc(
      db,
      "trips/" + props.theTrip + "/categories",
      category
    );
    const newFields = {
      CategoryItems: arrayUnion({
        ItemName: newItem,
        Completed: false,
      }),
    };
    await updateDoc(categoryDoc, newFields);

    setNewItem("");
    setAdding(false);
  };

  return adding ? (
    <>
      <input
        className="input-box"
        type="text"
        value={newItem}
        placeholder="  Add Item"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Button
        className="button"
        onClick={() => {
          addItem(props.category);
        }}
        disabled={newItem.length === 0}
        style={{ marginLeft: "10px" }}
      >
        Confirm
      </Button>
      <Button className="button" onClick={addingItem}>
        Cancel
      </Button>
    </>
  ) : (
    <Button onClick={addingItem}>Add Item</Button>
  );
}

export default AddItem;
