import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import thumbnail from '../../assets/resume-thumbnail.png';


export default function Resume() {
  return (
   
    <div>
       <Header />
       <div className="content">
      <h2 className="hidden">Resume</h2>
      <img id="resume" src={thumbnail} alt="thumbnail of resume" width="230"></img>
      <p><a href="https://amiracat.github.io/portfolio/amira-holden-resume.pdf" alt="open Amira's resume as PDF" target="_blank" rel="noreferrer"><button className="button" type="submit" value="Submit">Open Amira's resume (PDF)</button></a></p>
        <div className="col-4"></div><h3 className="col-8">Technical Skills</h3>
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
      <Footer />
      </div>
  );
}
