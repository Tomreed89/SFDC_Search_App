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
        <Button onClick={makeRequest} variant="primary" type="submit">
          Submit!
        </Button>
      </Form>
    </div>
  );

  function makeRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://th-apex-http-callout.herokuapp.com/animals", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          //console.log(xhr.responseText);
          alert("A" + xhr.responseText);
        } else {
          //console.error(xhr.statusText);
          alert("B" + xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      //console.error(xhr.statusText);
      alert("C" + xhr.statusText);
    };
    xhr.send(null);
  }
}
