import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../../../styles/CreateYourList.scss";

function CreateYourList(props) {
  //submit handler for when the user presses the submit button
  function submitHandler(e) {
    //to prevent the page from reloading/refreshing
    //this is bad because it resets the state, if we have any
    e.preventDefault();

    const list = {
      listName: e.target[0].value,
      listDestination: e.target[1].value,
      departureDate: e.target[2].value,
      clothesCategory: e.target[3].checked,
      documentsCategory: e.target[4].checked,
      electronicsCategory: e.target[5].checked,
      toiletriesCategory: e.target[6].checked,
      covidCategory: e.target[7].checked,
    };
    //add to firebase later
    console.log(list);
  }

  return (
    <div>
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
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Documents"
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Electronics"
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Toiletries"
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="COVID-19 Safety"
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
          >
            Create your list
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default CreateYourList;
