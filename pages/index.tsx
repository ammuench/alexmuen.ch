import React from "react";

import StaticPage from "../components/StaticPage";
import TextButton from "../components/TextButton";

const Home = () => {
  return (
    <StaticPage
      pageTitle="alex muench | software developer & bird enthusiast"
      hideHeader
    >
      <div className="c_homePage">
        <div className="c_homeHero">
          <div className="c_homeHero__title">
            <h1 className="c_homeHero__titleText">alex muench</h1>
            <h2 className="c_homeHero__titleSubtext">
              software developer & bird enthusiast
            </h2>
          </div>
          <img
            className="c_homeHero__img"
            src="/assets/header-hero.png"
            alt="Illustration of birds holding coding commands"
          />
        </div>
        <div className="c_homePanel">
          <div className="c_homePanel__inner">
            <h3 className="c_homePanel__heading">Who am I?</h3>
            <p>
              Hello, I'm Alex!
              <br />
              I am a Full-Stack Web Developer from Chicago, Illinois.
              <br />I have over 10+ years experience in software development
              with additional experience in leadership roles and management!
            </p>
            <TextButton path="/about" text="More About Me" />
          </div>
        </div>
        <div className="c_homePanel c_homePanel--alt">
          <div className="c_homePanel__inner">
            <h3 className="c_homePanel__heading">Work</h3>
            <p>
              I am currently a Staff Software Engineer at{" "}
              <a
                rel="noopener"
                href="https://www.hotelengine.com"
                target="_blank"
              >
                HotelEngine
              </a>{" "}
              where I am focused on helping architect and develop their Web &
              Mobile Applications!
            </p>
            <TextButton
              path="https://github.com/ammuench"
              text="My Github"
              invert
            />
            <br />
            <TextButton path="/work" text="more about my work" invert />
          </div>
        </div>
        <div className="c_homePanel">
          <div className="c_homePanel__inner">
            <h3 className="c_homePanel__heading">Bird Photgraphy</h3>
            <p>
              I'm an avid bird photographer as well who has been published and
              showcased by the{" "}
              <a
                rel="noopener"
                href="https://www.chicagobirder.org/"
                target="_blank"
              >
                Chicago Ornithological Society
              </a>{" "}
              and{" "}
              <a rel="noopener" href="https://ebird.org/" target="_blank">
                Cornell's eBird
              </a>
              .
              <br />
              If there is any interest in licensing my photographs, please reach
              out via email
            </p>
            <TextButton
              path="https://ebird.org/profile/MTc4NzYzOQ/world"
              text="eBird profile"
            />
            <br />
            <TextButton
              path="https://media.ebird.org/catalog?mediaType=photo&searchField=user&userId=USER1787639&sort=upload_date_desc&unconfirmed=incl"
              text="Bird Photos"
            />
          </div>
        </div>
        <div className="c_homePanel c_homePanel--alt">
          <div className="c_homePanel__inner">
            <h3 className="c_homePanel__heading">Contact Me</h3>
            <p>
              You can reach out to me with any inquiries or questions via email
              at:
              <br />
              <strong className="c_homePanel__email">
                ammuench (at) gmail (dot) com
              </strong>
              <br />
            </p>
            <p>
              I can also be reached through social media, though email is
              preferred
            </p>
            <TextButton
              path="https://www.linkedin.com/in/alex-muench-76585b83/"
              text="My LinkedIn"
              invert
            />
          </div>
        </div>
      </div>
    </StaticPage>
  );
};

export default Home;
