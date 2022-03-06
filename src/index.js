import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React, { Component }  from 'react';
import Nav from 'react-bootstrap/Nav'

import App from "./App";
import TableComponent from "./TableComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
<StrictMode>

<br/>
<h1>Salesforce Tool</h1>
<br/>

<Nav variant="pills" defaultActiveKey="link-1">
<Nav.Item>
<Nav.Link eventKey="link-1">Option 1</Nav.Link>
<App />
<TableComponent  />
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-2">Option 2</Nav.Link>
</Nav.Item>
</Nav>


</StrictMode>,
rootElement

);

