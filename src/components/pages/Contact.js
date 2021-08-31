import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="content">
      <h2 id="h2">Contact</h2>
      <p>
      <form className="blockc">
  <label className="blockc">
    Name:
    <input  className="blockc"type="text" name="name" />
  </label>
  <label className="blockc">
    Email:
    <input  className="blockc"type="email" name="email" />
  </label>
  <label className="blockc">
   Message:
    <input className="blockc" type="text" name="message" />
  </label>
  
  <input className="button" style={{ marginTop: '20px' }} type="submit" value="Submit" />
</form>
      </p>
    </div>
      <Footer />
      </div>
  );
}
