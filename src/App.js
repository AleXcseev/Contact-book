import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AllContacts from "./components/All-contacts/All-contacts";
import AddNewContact from "./components/Add-new-contact/Add-new-contact";
import ContactInformation from "./components/Contact-information/Contact-information";
import Menu from "./components/Menu/Menu";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/all-contacts" component={ AllContacts }></Route>
        <Route path="/add-new-contact" component={ AddNewContact }></Route>
        <Route path="/contact-information" component={ ContactInformation }></Route>
        <Route path="/menu" component={ Menu }></Route>
      </Router>
    </div>
  );
}

export default App;
