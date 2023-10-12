import React from 'react';
import './About.css';
import selfPhoto from '../../assets/Selfphoto.jpg';

function About() {
  return <div className="about-section">
  <div className="about-image">
  <img src={selfPhoto} alt="Tristan Brennan" />
  </div>
  <div className="about-text">
    <h2>Welcome to my portfolio site built using react!</h2>
    <p>My name's Tristan Brennan and at the young age of 21, I am deeply immersed in the world of web development.
         At this early age I've already built a robust skill set that spans across both front-end and back-end technologies, 
         the list of what I am competent with can be found under the "Resume" section of this site.</p>

    <p>I have a deep passion for learning more about the ever changing world of web development and am driven forwards by this
         passion and excitement of not only what I can create, but also what I can make of myself and how I can grow
         with my piers and what we can acheive together.</p>
    <p>If you're in search of a young, dynamic, and highly-skilled web developer who is not only passionate about crafting 
        efficient code but also committed to driving business goals, then look no further. Contact information can be found
         under the Contact portion of my site and links to my Github/LinkedIn can be found at the bottom of the page to learn
          more things about me or have other ways to get in contact with me.</p>
  </div>
</div>;
}

export default About;