import React from "react";

import Header from "../Header/Header";
import ContactCard from "../Contact-card/Contact-card";

import "./all-contacts.css";

function AllContacts() {
    const listOfContact = [
        {
            "_id": "58a446fcc26aaf13460533bd",
            "name": "Yurii",
            "surname": "Chikhrai",
            "image": "/img/58a446fcc26aaf13460533bd/awerasef.jpg"
        },
        {
            "_id": "58a446fcc26aaf13460533bd",
            "name": "Yurii",
            "surname": "Chikhrai",
            "image": "/img/58a446fcc26aaf13460533bd/awerasef.jpg"
        },
        {
            "_id": "58a446fcc26aaf13460533bd",
            "name": "Yurii",
            "surname": "Chikhrai",
            "image": "/img/58a446fcc26aaf13460533bd/awerasef.jpg"
        }
      ];
    const contactCards = listOfContact.map(item => {
        return <ContactCard contact={item}></ContactCard>
    });
    return (
        <div className="All-contacts">
            <Header closeBtn={false} actionMenu={false}></Header>
            { contactCards }
      </div>
    )
}

export default AllContacts;