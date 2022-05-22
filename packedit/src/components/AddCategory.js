import React, { useState } from "react";
import { db } from "../Firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import "../styles/styles.scss";

function AddCategory(props) {
  const [adding, setAdding] = useState(false);
  const [input, setInput] = useState("");

  const addingCategory = () => {
    setAdding(!adding);
  };

  const createCategoryDoc = async () => {
    await addDoc(collection(db, "trips/" + props.theTrip + "/categories"), {
      CategoryName: input,
      CategoryItems: [],
    });

    setInput("");
    setAdding(false);
  };

  return adding ? (
    <>
      <input
        className="input-box"
        style={{ marginLeft: "10%", marginTop: "11px" }}
        type="text"
        value={input}
        placeholder="  Add Category"
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <Button
        className="button"
        onClick={createCategoryDoc}
        disabled={input.length === 0}
        style={{ marginLeft: "10%", marginTop: "10px" }}
      >
        Confirm
      </Button>
      <Button
        className="button"
        onClick={addingCategory}
        style={{ marginTop: "10px" }}
      >
        Cancel
      </Button>
    </>
  ) : (
    <Button className="category-bar-add-button" onClick={addingCategory}>
      + Add Category...
    </Button>
  );
}

export default AddCategory;
