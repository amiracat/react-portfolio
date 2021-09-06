import React from 'react';
import '../../styles/style.css';
import Footer from '../Footer';
import Header from '../Header';
import Project from '../Project';

import profile1 from '../../assets/triv-game-800x550.png';
import profile2 from '../../assets/movie-800x550.png';
import profile3 from '../../assets/regex-800x550.png';
import profile4 from '../../assets/weather-800x550.png';
import profile5 from '../../assets/workout-tracker-800x550.png';
import profile6 from '../../assets/budget-800x550.png';


export default function Portfolio() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2 id="h2">Portfolio</h2>
        <div className="container" style={{paddingTop: '10px'}}>
          <div className="row">
            <Project
              key = "1"
              img = {profile1}  
              imgAlt = "Online trivia game homepage"
              project = "https://young-harbor-83683.herokuapp.com/"
              projectAlt = "quiz question from trivia game"
              projectTitle = "Trivialympics"
              gitHubRepo = "https://github.com/amiracat/trivialympics"
              gitHubAlt = "See game repository on GitHub"
              description = "Trivia game using MySQL, Express, Node, Handlebars, Green Sock animation deployed on Heroku" />
            <Project
              key = "2"
              img = {profile2}  
              imgAlt = "Trivia Olympics game homepage"
              project = "https://amiracat.github.io/what-should-i-watch/"
              projectAlt = "saved movies list"
              projectTitle = "What Should I Watch?"
              gitHubRepo = "https://github.com/amiracat/what-should-i-watch"
              gitHubAlt = "See app repository on GitHub"
              description = "Movie and drink recommender built with JQuery, Bulma and two APIs" />
          </div> 
          <div className="row">
            <Project
              key = "3"
              img = {profile3}  
              imgAlt = "Hex code regex explained"
              project = "https://gist.github.com/amiracat/2149063e2f66f08da6ae2fd02c49152e"
              projectAlt = "Tutorial explaining a specific regex"
              projectTitle = "Regular Expression tutorial"
              gitHubRepo = "https://gist.github.com/amiracat/2149063e2f66f08da6ae2fd02c49152e"
              gitHubAlt = "See gist on GitHub"
              description = "This Gist document explains how to decipher a regex, or regular expression, for searching for hex codes. It was fun to write and research." />
            <Project
              key = "4"
              img = {profile4}  
              imgAlt = "Trivia Olympics game homepage"
              project = "https://amiracat.github.io/weather-dashboard/"
              projectAlt = "five-day forecast for any selected city"
              projectTitle = "Weather Dashboard"
              gitHubRepo = "https://github.com/amiracat/weather-dashboard"
              gitHubAlt = "See app repository on GitHub"
              description = "Movie and drink recommender built with JQuery, Bulma and two APIs" />
          </div> 
          <div className="row">
            <Project
              key = "5"
              img = {profile5}  
              imgAlt = "workout tracker stats page"
              project = "https://workout-tracker-deluxe.herokuapp.com/"
              projectAlt = "fitness tracker with charts"
              projectTitle = "Workout Tracker"
              gitHubRepo = "https://github.com/amiracat/workout-tracker"
              gitHubAlt = "See game repository on GitHub"
              description = "Create and track workouts in this exercise app that uses MongoDB, Express, Node.js, API routes and is deployed on Heroku" />
            <Project
              key = "6"
              img = {profile6}  
              imgAlt = "Budget tracker list of transactions"
              project = "https://amiracat.github.io/online-offline-budget-tracker"
              projectAlt = "saved movies list"
              projectTitle = "Online-Offline Budget Tracker"
              gitHubRepo = "https://github.com/amiracat/online-offline-budget-tracker"
              gitHubAlt = "See budget tracker repository on GitHub"
              description = "Deployed on Heroku, this app tracks budget expenses and deposits whether you are online or offline." />
          </div> 
        </div>
      </div>
    <Footer />
    </div>
  );
}
