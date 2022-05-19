import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../../../styles/CreateYourList.scss";
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { collection, writeBatch, getDocs, addDoc, setDoc, arrayUnion, updateDoc, doc, deleteDoc, Timestamp, firestore, DocumentReference } from 'firebase/firestore';
import { dataValue } from "react-widgets/cjs/Accessors";

function CreateYourList() {
  // submit handler for when the user presses the submit button
  function submitHandler(e) {
    //to prevent the page from reloading/refreshing
    //this is bad because it resets the state, if we have any
    e.preventDefault();
  }

  // const [myList, setMyList] = useState([]);
  // const myListCollectionRef = collection(db, "myList")
  // const myListCategoriesCollectionRef = collection(db, "myListCategories")
  const myListCollectionRef = collection(db, "trips");
  const myListCategoriesCollectionRef = collection(db, "categories");

  const [newListName, setNewListName] = useState("");
  const [newDestination, setNewDestination] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newCategories, setNewCategories] = useState("");

  const [clothesCheck, setClothesCheck] = useState(false);
  const [documentCheck, setDocumentCheck] = useState(false);
  const [electronicCheck, setelectronicCheck] = useState(false);
  const [toiletriesCheck, setToiletriesCheck] = useState(false);
  const [covidCheck, setCovidCheck] = useState(false);

  const handleCheck = async (category) => {
    setNewCategories({
      CategoryName: category,
      CategoryItems: []
    })
  } 
  // at the moment this only adds one of the categories, need to figure out how to stop it overriding

  const createList = async () => {
    const timestampConverted = new Date(newDate);
    await addDoc(myListCollectionRef, {
      ListName: newListName,
      Destination: newDestination,
      Date: timestampConverted,
    }).then(DocumentReference => {
      if(clothesCheck){
        addDoc(collection(db, "trips/"+DocumentReference.id+"/categories"), {CategoryName: "Clothes", CategoryItems: []});
      }
      if(documentCheck){
        addDoc(collection(db, "trips/"+DocumentReference.id+"/categories"), {CategoryName: "Documents", CategoryItems: []});
      }
      if(electronicCheck){
        addDoc(collection(db, "trips/"+DocumentReference.id+"/categories"), {CategoryName: "Eletronics", CategoryItems: []});
      }
      if(toiletriesCheck){
        addDoc(collection(db, "trips/"+DocumentReference.id+"/categories"), {CategoryName: "Toiletries", CategoryItems: []});
      }
      if(covidCheck){
        addDoc(collection(db, "trips/"+DocumentReference.id+"/categories"), {CategoryName: "COVID-19 Safety", CategoryItems: []});
      }
        
    });
    //Old code
    // await addDoc(myListCategoriesCollectionRef,
    //   newCategories
    //   ); 
    
  }

  return (
    <div>
      {/* {documentCheck ? <>checked</> : <>not checked</>} */}
      <Card className="card">
        <Form onSubmit={submitHandler}>
          <Row>
            <Col>
              <Form.Group className="title-text mb-4">
                <Form.Label className="mb-3">List Name</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="Summer Holiday"
                  onChange={(event) => { setNewListName(event.target.value); }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="title-text">
                <Form.Label className="mb-3">Destination</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="Maldives"
                  onChange={(event) => { setNewDestination(event.target.value); }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="title-text" controlId="dob">
                <Form.Label className="mb-3">Select Date</Form.Label>
                <Form.Control
                  className="input"
                  type="date"
                  name="trip-date"
                  placeholder="Trip Date"
                  onChange={(event) => { setNewDate(event.target.value); }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label className="title-text my-3">
                List Categories
              </Form.Label>
              <br />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Clothes"
                id="string" // accessibility
                // onChange={() => {handleCheck("Clothes")}}
                onChange={()=>setClothesCheck(!clothesCheck)}
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Documents"
                id="string" //accessibility
                // onChange={() => { handleCheck("Documents") }}
                onChange={()=>setDocumentCheck(!documentCheck)}
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Electronics"
                id="string" // accessibility
                // onChange={() => { handleCheck("Electronics") }}
                onChange={()=>setelectronicCheck(!electronicCheck)}
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Toiletries"
                id="string" // accessibility
                // onChange={() => { handleCheck("Toiletries") }}          
                onChange={()=>setToiletriesCheck(!toiletriesCheck)}    
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="COVID-19 Safety"
                id="string" // accessibility
                // onChange={() => { handleCheck("COVID-19 Safety") }}
                onChange={()=>setCovidCheck(!covidCheck)}
              />
              <Form.Text className="categories-text text-muted">
                <br />
                ...you can add more once you've made your list!
              </Form.Text>
            </Form.Group>
          </Row>
          <Button
            className="create-button create-button-text"
            variant="primary"
            type="submit"
            onClick={createList} // need to add in functionality here that routes the user to the Your List page once this is complete
          >
            Create your list
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default CreateYourList;
