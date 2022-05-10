import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../../../styles/CreateYourList.css";

function CreateYourList(props) {
  return (
    <div>
      <Card className="card">
        <Form>
          <Row>
            <Col>
              <Form.Group className="title-text mb-3">
                <Form.Label>List Name</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="Summer Holiday"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="title-text mb-3">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="Maldives"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="title-text mb-3" controlId="dob">
                <Form.Label>Select Date</Form.Label>
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
              <Form.Label className="title-text">List Categories</Form.Label>
              <br />
              <Form.Check inline type="checkbox" label="Clothes" />
              <Form.Check inline type="checkbox" label="Documents" />
              <Form.Check inline type="checkbox" label="Electronics" />
              <Form.Check inline type="checkbox" label="Toiletries" />
              <Form.Check inline type="checkbox" label="COVID-19 Safety" />
              <Form.Text className="text-muted">
                <br />
                ...you can add more once you've made your list!
              </Form.Text>
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Create your list!
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default CreateYourList;
