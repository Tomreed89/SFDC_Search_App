import "./styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Salesforce Record Search!</Form.Label>
          <Form.Control type="text" placeholder="Enter Salesforce Id" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit!
        </Button>
      </Form>
    </div>
  );

  function makeRequest() {
    fetch("https://th-apex-http-callout.herokuapp.com/animals")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}
