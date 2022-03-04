import "./styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

function getName() {
  return "Name: ";
}

const abc = [];
const version = "2.4";

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

  function makeRequest(event) {
    let response = "";
    event.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users", {
      //mode: "no-cors",
      //header: "Access-Control-Allow-Origin: *",
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      //.then((json) => {
      //  console.log(json);
      //})
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            console.log(json);
            abc.push(json);
            console.log(abc);
          });
        }
      })

      .catch((error) => {
        alert(error);
        alert(response);
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
