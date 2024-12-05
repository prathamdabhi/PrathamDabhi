import React from "react";
import "./Contacts.css";
const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <h1 className="contacts__heading">Get In Touch</h1>
      <div className="contacts__container">
        <img className="contact__img" src="contact-img.svg" alt="" />
        <form className="contact__form" action="">
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            required
          />
          <input type="text" placeholder="Last Name" name="lastname" required />
          <input type="text" placeholder="email" name="email" required />
          <input type="text" placeholder=" phone no." name="phone" required />
          <textarea
            name="message"
            cols="10"
            rows="8"
            placeholder="Message"
          ></textarea>
          <button type="submit" className="contact__btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
