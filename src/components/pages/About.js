import React from 'react';
import '../../styles/style.css';
import Header from '../Header';
import Footer from '../Footer';
import portrait from '../../assets/amira-square.jpg';



export default function About() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2 id="h2">About me</h2>
        <img className="image" src={portrait} alt="Amira portrait" width="140"></img>
        <div className="bio">
          <p>I am passionate about words, technology and accessibility.</p>
          <p>My background is in front-end applications and content management. I am about to graduate from a Coding Bootcamp through the University of Minnesota to expand my skills to include front-end and back-end development. It is fast-paced learning but a lot of fun.</p>
          <p>I plan to use my coding skills and content strategy background to make amazing digital products that are user-friendly to all.</p>
          <p>I live in Minneapolis with my family near water, trees, parks, people, traffic, airplanes, bunnies and many other amazing things.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
