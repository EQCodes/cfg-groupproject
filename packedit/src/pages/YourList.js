import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase-config";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ListBody from "../components/ListBody";
import DisplayCategories from "../components/DisplayCategories";
import AddCategory from "../components/AddCategory";
import TripSelector from "../components/TripSelector";
import { Button, Modal } from "react-bootstrap";
import "../styles/YourList.scss";
import { useLocation } from 'react-router-dom';

function YourList() {
  // getting data from firebase
  const [isLoading, setIsLoading] = useState(true);
  // setting states
  const [theTrip, setTheTrip] = useState("");
  const [show, setShow] = useState(false);
  const [myList, setMyList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function for updating the trip selector drop down with the chosen trip
  const updateTheTrip = (theChosenTrip) => {
    setTheTrip(theChosenTrip);
  };

  // function later embedded within DeleteTrip for removing the category doc from Firebase
  const deleteDocument = async (TripID, CategoryID) => {
    await deleteDoc(doc(db, "trips/" + TripID + "/categories", CategoryID));
  };

  // function later embedded within DeleteTrip for removing the trip doc from Firebase
  const deleteDocumentTrip = async (TripID) => {
    await deleteDoc(doc(db, "trips", TripID));
  };

  // function for deleting the full trip 
  const DeleteTrip = async (id) => {
    const querySnapshot = await getDocs(
      collection(db, "trips/" + id + "/categories")
    );
    querySnapshot.forEach((doc) => {
      deleteDocument(id, doc.id);
    });

    deleteDocumentTrip(id);
    setTheTrip("");
  };

  const location = useLocation();

  useEffect(() => {
    const getMyList = async () => {
      const q = query(collection(db, "trips"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const theTrips = [];
        querySnapshot.forEach((doc) => {
          theTrips.push({ ...doc.data(), id: doc.id });
        });

        setMyList(theTrips);
        setIsLoading(false);
      });
    };

    getMyList();
  }, []);

  useEffect(() => {
    if (location.state) {
      setTheTrip(location.state.tripID);
    }
    else {
      setTheTrip("");
    }
  }, [location])

  // First returns a ternary operator to display data appropriately
  // If isLoading === true, page is still loading or if isLoading === false, display data
  return isLoading ? (
    <div>
      <h2>Data Loading...</h2>
    </div>
  ) : (
    <div className="home-bg">
      <div className="container-fluid" style={{ paddingBottom: "7%" }}>
        <div className="row">
          <div className="col">
            <nav>
              <NavBar />
            </nav>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "170px", paddingLeft: "2%" }}>

          {/* List Categories Card Display */}
          <div className="col-3 mx-5 your-list-card">
            <h3 className="category-bar-header">List Categories</h3>
            <DisplayCategories theTrip={theTrip} />
            {theTrip === "" ? <></> : <AddCategory theTrip={theTrip} />}
          </div>

          {/* List Info & Trip Selector Card Display */}
          <div className="col ml-5" style={{ paddingRight: "7%" }}>
            <div className="row your-list-info-card">
              <TripSelector trips={myList} updateTheTrip={updateTheTrip} theDefault={theTrip} />
              {theTrip !== "" ? myList.filter(theList => theList.id.includes(theTrip)).map((trip) => (
                <>

                  <div class="container" style={{ paddingTop: "10px" }}>
                    <div class="row your-list-info">
                      <div class="col-4 your-list-info-trip">
                        {trip.ListName}
                      </div>
                      <div class="col-3">{trip.Destination}</div>
                      <div class="col-5 your-list-info-date d-flex">
                        {" "}
                        {trip.Date.toDate().toDateString()}
                      </div>
                    </div>
                    <br />
                    <Button onClick={handleShow} className="delete-trip-button" >Delete this trip</Button>

                    {/* Modal pop up to alert user when deleting list */}
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Stop right there!</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        If you delete this list it deletes all
                        of the categories and the items within them.
                        Are you sure you want to do that?!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close - I regret my decision!
                        </Button>
                        <Button variant="primary" onClick={() => DeleteTrip(trip.id)}>
                          Delete - I'm feeling brave!
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </>)) : <></>}
            </div>

            {/* List Body Cards Display with individual list items*/}
            <div className="row mt-3">
              <ListBody theTrip={theTrip} />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default YourList;
