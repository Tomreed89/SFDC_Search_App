import "./styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

function getName() {
  return "Name: ";
}

const abc = "";
const version = "1.7";

export default function App() {
  return (
    <div className="App">
      <Form>
        <label>
          {getName()}
          <input type="text" />
        </label>
        <Button onClick={makeRequest} variant="primary" type="submit">
          Submit!
        </Button>
      </Form>
      {abc}
      {"Version: " + version}
    </div>
  );

  function makeRequest() {
    alert("hello!");

    $.ajax({
      url: "/https://th-apex-http-callout.herokuapp.com/animals",
      //data: {
      // zipcode: 97201
      //},
      success: function (result) {
        $("#abc").html(result);
      }
    });

    /*
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
    */
  }
}
