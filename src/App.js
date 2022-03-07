import "./styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



import React, { Component }  from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

function getName() {
  return "Name: ";
}

const abc = [];
const version = "2.6";


export default function App() {
  return (
    <div className="App">
      <Form>
        <label> 
          {getName()}
          <input id="userNameInput" type="text" />
        </label>
        <label> 
          Password:
          <input id="passInput" type="password" />
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
   

    var passValue = document.getElementById("passInput").value;
    var userNameValue = document.getElementById("userNameInput").value;

    var uriValue = "https://login.salesforce.com/services/oauth2/token";


    fetch(uriValue, {
      //mode: "no-cors",
      header: "grant_type=password",
      header: "client_id=3MVG9Rd3qC6oMalVHG_.BLFwChwG7DsWJLuAXDAtDu7vOTqAcZjVGCTjNrXNxqr4xMQksl5EBJd2F.RUL8PM3" ,
      header: "client_secret=c8E5C0A0293758E27D88A827337B06E08EF64DD5E44620322564AC4BA2E19D43C",
      header: "username=tomreed89@googlemail.com" ,
      header: "password=hywhA1-qidviv-vocgehbwpzVio6w3iDWVRmmz9kPwILr",
      method: "POST",
      headers: {
        Accept: "application/json"
      }
    })

      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            console.log(json);
            
            console.log(abc);
         
            
          });
        }
      })

      .catch((error) => {
        alert(error);
        alert(response);
      });










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
