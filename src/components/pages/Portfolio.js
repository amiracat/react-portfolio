import React from 'react';
import '../../styles/style.css';
import Footer from '../Footer';
import Header from '../Header';
import profile from '../../assets/triv-game-800x550.png';
import gitlogo from '../../assets/GitHub-Mark-32px.png';

export default function Portfolio() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2 id="h2">Portfolio</h2>
        <div className="container">
          <div className="row">
            <div className="col-6">
    
            <img className="one-project image" src={profile} alt="Trivia Olympics game homepage"></img>
            <div className="one-project" style={{display: 'flex', justifyContent: 'space-between'}}>
              <p><a className="project-link" href="https://young-harbor-83683.herokuapp.com/" alt="quiz question from trivia game"><b>Trivialympics online game</b></a></p>
              <p><a href="https://github.com/amiracat/trivialympics" title="See game repository on GitHub"><img className="git" src={gitlogo} alt="Link to GitHub account" width="30"></img></a></p>
            </div>
            <p>Uses MySQL, Express, Node, Handlebars, Green Sock animation deployed on Heroku
            </p>
            </div>        
      {/* project 2 */}
          <div className="col-6">
            <img className="one-project image" src={profile} alt="Trivia Olympics game homepage"></img>
            <div className="one-project" style={{display: 'flex', justifyContent: 'space-between'}}>
              <p><a className="project-link" href="https://young-harbor-83683.herokuapp.com/" alt="quiz question from trivia game"><b>Trivialympics online game</b></a></p>
              <p><a href="https://github.com/amiracat/trivialympics" title="See game repository on GitHub"><img className="git" src={gitlogo} alt="Link to GitHub account" width="30"></img></a></p>
              </div>
            <p>Uses MySQL, Express, Node, Handlebars, Green Sock animation deployed on Heroku
            </p>
          </div>
        </div>
      </div>
    </div>
   <Footer />
   </div>
  );
}
