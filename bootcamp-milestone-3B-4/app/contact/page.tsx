"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name || !email || !message) {
      setError("please fill out all fields!");
      return;
    }

    setLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
            title: "New Contact Form Message", 
            name,                               
            email,                               
            message,                            
            time: new Date().toLocaleString(),  
        },
        publicKey
        );

      console.log("EmailJS result:", result);

      setSuccess("message sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("failed to send");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1 className="pagetitle">
        ₊✩‧₊˚Emma&apos;s Contacts˚₊✩‧₊
      </h1>
      <p className="sub_title">
        message me here! or email @enwalker@calpoly.edu
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <input
          type="submit"
          value={loading ? "Sending..." : "Submit"}
          disabled={loading}
        />
      </form>

      {error && <p className= "sub_title">{error}</p>}
      {success && <p className= "sub_title">{success}</p>}
    </main>
  );
}
