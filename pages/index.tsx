import React from 'react';

import StaticPage from '../components/StaticPage';
import TextButton from '../components/TextButton';

const Home = () => {
  return (
    <StaticPage pageTitle="alex muench | software developer & bird enthusiast" hideHeader>
      <div className="c_homePage">
        <div className="c_homeHero">
          <div className="c_homeHero__title">
            <h1 className="c_homeHero__titleText">alex muench</h1>
            <h2 className="c_homeHero__titleSubtext">software developer & bird enthusiast</h2>
          </div>
          <img className="c_homeHero__img" src="/assets/header-hero.png" alt="Illustration of birds holding coding commands" />
        </div>
        <div className="c_homePanel">
          <div className="c_homePanel__inner">
            <h3 className="c_homePanel__heading">Who am I?</h3>
            <p>
              Hello, I'm Alex!
            <br />
            I am a software developer from Chicago, Illinois.
            <br />
            I primarily work in Front-End development, but also have devops, server, and mobile development experience</p>
            <TextButton path="/about" text="More About Me" />
          </div>
        </div>
        <div className="c_homePanel c_homePanel--alt">
          <div className="c_homePanel__inner">
            <h3 className="c_homePanel__heading">Work</h3>
            <p>
              I am currently the CTO at <a rel="noopener" href="https://www.ggleagues.com/" target="_blank">GGLeagues</a>.  I run our technical team and architect our Web Application, which helps us enable organizations and community groups to run recreational esports leagues for their communities</p>
            <TextButton path="https://github.com/ammuench" text="My Github" invert />
            <br />
            <TextButton path="/work" text="more about my work" invert />
          </div>
        </div>
        <div className="c_homePanel">
          <div className="c_homePanel__inner">
            <h3 className="c_homePanel__heading">Contact Me</h3>
            <p>
              You can reach out to me with any inquiries or questions via email at:<br />
              <strong className="c_homePanel__email">ammuench (at) gmail (dot) com</strong><br />
            </p>
            <p>
              I can also be reached through social media, though email is preferred
          </p>
            <TextButton path="https://www.linkedin.com/in/alex-muench-76585b83/" text="My LinkedIn" />
            <br />
            <TextButton path="https://www.facebook.com/alex.muench/" text="My Facebook" />
          </div>
        </div>
      </div>
    </StaticPage>
  )
};

export default Home;