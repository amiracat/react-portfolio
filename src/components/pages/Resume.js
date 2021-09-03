import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import thumbnail from '../../assets/resume-thumbnail.png';


export default function Resume() {
  return (
    <div>
       <Header />
       <div className="content">
      <h2 id="h2">Resume</h2>
      <div className="container">
        <div className="row">
        <div className="col-md-6">
      <img className="image" id="resume" src={thumbnail} alt="thumbnail of resume"></img>
      <p><a href="https://amiracat.github.io/portfolio/amira-holden-resume.pdf" alt="open Amira's resume as PDF" target="_blank" rel="noreferrer"><button className="button" type="submit" value="Submit">Open resume (PDF)</button></a></p>
      </div>
      <div className="col-md-1"></div>
        <div className="col-md-4"><h3>Technical Skills</h3>
        <ul>
        <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Front-end development</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Debugging</li>
          <li>UI/UX</li>
          <li>AEM, WordPress</li>
        </ul>
        </div>
        
    </div>
    </div>
      </div>
      <Footer />
      </div>
  );
}
