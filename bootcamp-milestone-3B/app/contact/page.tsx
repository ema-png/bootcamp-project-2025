import React from "react";

export default function Contact() {
    return(
        <main>
            <h1 className = "pagetitle">
                ₊✩‧₊˚Emma&apos;s Contacts˚₊✩‧₊
            </h1>
            <p className = "sub_title">
                message me here! or email @enwalker@calpoly.edu
            </p>
            <form className = "contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />

                <input type="submit" value="Submit" />
            </form>
        </main> 
    )
}
