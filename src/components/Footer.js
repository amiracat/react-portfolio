//  need icons:
//  LINKEDIN
// GITHUB
// EMAIL

import React from 'react';
import '../styles/style.css';
import ghlogo from '../assets/GitHub-Mark-Light-64px.png';
import lilogo from '../assets/In-White-96.png';
import elogo from '../assets/email-64.png';


export default function Footer() {
    return (
      <div className="footer">
        <a href="https://github.com/amiracat" alt="Link to GitHub account"><img className="icon" src={ghlogo} alt="Link to GitHub account" width="64"></img></a>
        <a href="https://www.linkedin.com/in/amiraholden/" alt="Link to LinkedIn"><img className="icon" src={lilogo} alt="LinkedIn account" width="64"></img></a>
        <a href="mailto:amiraholden@gmail.com" alt="Link to email"><img className="icon" src={elogo} alt="Email Amira" width="64"></img></a>
        </div>
    );
  }
  