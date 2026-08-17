"use client";
import React, { useState } from "react";
import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform your form submission logic here
    // For demonstration purposes, showing an alert with a message
    alert(`Email ${email} has been registered!`);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <img alt="GlobalX Logo" height={80} width={200} src="/logo.png" />
      <br />
      <div
        className="p-10 w-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="flex gap-10">
          <a href="https://www.instagram.com/globalxlabs">
            <FaInstagram color="white" size={36} />
          </a>
          {/* <a href="https://www.facebook.com/globalxlabs">
            <FaFacebookF color="white" size={36} />
          </a> */}
          <a href="https://www.twitter.com/globalxlabs">
            <FaXTwitter color="white" size={36} />
          </a>
        </div>
        <br />
        <p style={{ color: "white" }}>Join our mailing list</p>
        <form
          className="w-screen flex flex-col items-center justify-center"
          onSubmit={handleFormSubmit}
        >
          <input
            id="footer-input"
            className="w-3/4 p-1 mt-5"
            placeholder="Email Address"
            onChange={handleInputChange}
          />
          <input
            className="w-3/4 p-2 mt-5"
            id="footer-submit"
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
      <p className="text-sm p-4 text-center">
        GLOBALX INVESTMENTS LIMITED | COPYRIGHT 2024 Ⓒ
      </p>
    </div>
  );
}
