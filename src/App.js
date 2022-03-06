import "./styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

function getName() {
  return "Name: ";
}

const abc = [];
const version = "2.5";


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
      <div id="varOne"> </div>
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

      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            console.log(json);
            abc.push(json);
            console.log(abc);
         
            document.getElementById("varOne").innerHTML = json[0].name;
          });
        }
      })

      .catch((error) => {
        alert(error);
        alert(response);
      });

  }
}
