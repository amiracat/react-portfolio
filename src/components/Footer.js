//  need icons:
//  LINKEDIN
// GITHUB
// EMAIL

import React from 'react';
import '../styles/style.css';


export default function Footer() {
    return (
      <div className="footer">
        <a href="https://github.com/amiracat" alt="Link to GitHub account"><img className="icon" src="../../src/assets/GitHub-Mark-64px.png" alt="Link to GitHub account" width="64"></img></a>
        <a href="https://www.linkedin.com/in/amiraholden/" alt="Link to LinkedIn"><img className="icon" src="../src/assets/LI-In-Bug.png" alt="LinkedIn account" width="64"></img></a>
        <a href="mailto:amiraholden@gmail.com" alt="Link to email"><img className="icon" src="../assets/GitHub-Mark-64px.png" alt="Email Amira" width="64"></img></a>
        </div>
    );
  }
  