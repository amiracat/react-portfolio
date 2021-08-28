import React from 'react';
import '../../styles/style.css';

import Footer from '../Footer';

export default function About() {
  return (
    <div><div className="content">
      <h2>About me</h2>
      <img src="https://amiracat.github.io/portfolio/assets/amira-square.jpg" alt="Amira portrait" width="140"></img>
      <div className="bio">
      <p>I am passionate about words, technology and accessibility.</p>
      <p>My background is in front-end applications and content management. I am enrolled in a Coding Bootcamp through the University of Minnesota to expand my skills to include front-end and back-end development.</p>
      <p>I plan to use my coding skills and editing and content strategy background to make amazing digital products that are strategic and user-friendly to all.</p>
      <p>I live in Minneapolis with my family near water, trees, parks, people, traffic, airplanes, bunnies and many other amazing things.</p>
      </div>
      </div>
      <Footer />
      </div>
  );
}
