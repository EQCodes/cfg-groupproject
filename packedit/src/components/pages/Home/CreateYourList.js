import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CreateYourList(props) {
    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>List Name</Form.Label>
                            <Form.Control type="text" placeholder="Summer Holiday" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" placeholder="Maldives" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>List Categories</Form.Label>
                        <Form.Check inline type="checkbox" label="Clothes" />
                        <Form.Check inline type="checkbox" label="Documents" />
                        <Form.Check inline type="checkbox" label="Electronics" />
                        <Form.Check inline type="checkbox" label="Toiletries" />
                        <Form.Check inline type="checkbox" label="COVID-19 Safety" />       
                        <Form.Text className="text-muted">
                            ...you can add more once you've made your list!
                        </Form.Text>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">Create your list!</Button>
            </Form>
        </div >
    )
}

export default CreateYourList;
