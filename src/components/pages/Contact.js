import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2 id="h2">Contact</h2>
        <p> This contact form is under construction. Check back for functionality soon. </p>
        <p>Please message Amira at <a href="mailto:amiraholden@gmail.com">amiraholden@gmail.com</a>.</p>
        <p><form className="blockc">
        <label className="blockc">
        Name:
        <input  className="blockc"type="text" name="name" disabled />
        </label>
        <label className="blockc">
        Email:
        <input  className="blockc"type="email" name="email" disabled />
        </label>
        <label className="blockc">
        Message:
        <input className="blockc" type="text" name="message" disabled />
        </label>
        <input className="button" style={{ marginTop: '20px' }} type="submit" value="Submit" disabled />
        </form>
        </p>
      </div>
    <Footer />
    </div>
  );
}
