import AddItem from "./AddItem";
import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase-config";
import { collection, query, setDoc, doc, onSnapshot } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import "../styles/YourList.scss";

function ListBody(props) {
  const [myListCategories, setMyListCategories] = useState([]);

  useEffect(() => {
    const getMyListCategories = async () => {
      const q = query(collection(db, "trips/" + props.theTrip + "/categories"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const theCategories = [];
        querySnapshot.forEach((doc) => {
          theCategories.push({ ...doc.data(), id: doc.id });
        });

        setMyListCategories(theCategories);
      });
    };

    if (props.theTrip !== "") {
      getMyListCategories();
    }
  }, [props.theTrip]);

  // function for deleting the list item
  const deleteTheItem = async (i, j, id) => {
    let temp_state = [...myListCategories];
    let temp_element = { ...temp_state[i] };
    temp_element.CategoryItems.splice(j, 1);
    await setDoc(
      doc(db, "trips/" + props.theTrip + "/categories", id),
      temp_element
    );
  };

  // function for checking the list item as complete/packed
  const checkTheItem = async (i, j, id) => {
    let temp_state = [...myListCategories];
    let temp_element = { ...temp_state[i] };
    temp_element.CategoryItems[j].Completed =
      !temp_element.CategoryItems[j].Completed;
    await setDoc(
      doc(db, "trips/" + props.theTrip + "/categories", id),
      temp_element
    );
  };

  return (
    <>
      {myListCategories.map((category, i) => {
        return (
          <div key={i} className="list-body">
            <h4
              className="category-header"
              style={{
                margin: "7px 7px 10px 7px",
              }}
            >
              {category.CategoryName}
            </h4>

            <>
              {category.CategoryItems.map((item, j) => {
                return (
                  <div
                    key={j}
                    className="col-14 item"
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      defaultChecked={item.Completed}
                      onChange={() => checkTheItem(i, j, category.id)}
                      style={{ marginLeft: "2%", marginRight: "2%" }}
                    />

                    <div className="col-10 category-items">{item.ItemName}</div>

                    <Button
                      className="col-1 delete-button"
                      onClick={() => deleteTheItem(i, j, category.id)}
                    >
                      x
                    </Button>
                  </div>
                );
              })}
            </>

            <div style={{ margin: "15px 0px 6px 10px" }}>
              <AddItem category={category.id} theTrip={props.theTrip} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ListBody;
