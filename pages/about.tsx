import React from "react";

import StaticPage from "../components/StaticPage";
import TextButton from "../components/TextButton";

const About = () => {
  return (
    <StaticPage pageTitle="alex muench | about me       ">
      <div className="c_aboutPage">
        <h2 className="c_aboutPage__header">About Me</h2>
        <img
          className="c_aboutPage__profile"
          src="/assets/alex_web_portrait.jpg"
        />
        <p>
          Hello! My name is Alex Muench. I'm a software developer with over 10
          years of professional experience. I grew up just outside of Chicago,
          and have been living in the city since 2013.
        </p>
        <p>
          I have been tinkering with computers and programming since a child,
          and have been making websites since the days of Geocities. I'm also
          passionate about marine biology and the environment around us. I
          pursued both these topics in College, and graduated from the
          University of Notre Dame with a double major in Environmental Science
          and Computer Applications.
        </p>
        <p>
          I've done the majority of my professional work in various agencies and
          consulting firms. I've done stints at Acquity Group, Accenture, and
          and Nerdery. This has allowed me to have a broad exposure to many
          different industries, projects, and techniques in my career.
        </p>
        <p>
          I've also been heavily invested in the esports scene. From 2016-2018 I
          was involved with running the largest amateur Dota 2 leagues at the
          time. And though I eventually moved on, the experience of running
          teams and serving international groups of players was exciting and a
          massive learning experience.
        </p>
        <p>
          After leaving EchoLeague, I spent several years at GGLeagues, a
          company focused on helping organization connect with their communities
          through esports, and offered the CTO role. In this role I architected
          our web application, managed our devops, grew our tech and product
          teams, and worked to build a platform that helps bring esports to
          everyone.
        </p>
        <p>
          When GGLeague was shut down, I started at Strategypoint, where I
          helped a small team create Business Strategy Software that tried to
          make strategy simple and accessible for anyone! I joined as an
          experienced contributer, and helped modernize old systems and develop
          several new flagship features for the product, working directly with
          their CTO.
        </p>
        <p>
          And now I am currently at Carta Healthcare, where I am a Senior UI/UX
          Engineer helping build and develop Carta's internal software, which
          helps us partner with healthcare organizations to streamline their
          clinical data collection, improving the quality of care given to
          patients!
        </p>
        <p>
          While my career started primarily doing Front-End/UI Work, I have
          expanded my skillset over the last 10 years and am an experinced
          Full-Stack TypeScript/Javascript developer, with plenty of experience
          in both UI and Server-based work.
        </p>
        <p>
          Outside of development, I've gotten very big into birding and bird
          photography.{" "}
          <a href="https://ebird.org/profile/MTc4NzYzOQ" target="_blank">
            You can see my photography and progress over on eBird!
          </a>
          . I'm also an avid World of Warcraft raider, and have been pushing
          AOTC for the last 3 seasons with my guild!
        </p>
        <p>
          <h3 className="c_aboutPage__skillsHeader">Skills: </h3>
          <ul>
            <li>
              Proficient with Javascript, Typescript (Both on Front-End and
              Back-End)
            </li>
            <li>Proficient with HTML, CSS</li>
            <li>
              Proficient in Angular Framework architecture and development
            </li>
            <li>Proficient in React architecture and development</li>
            <li>Experienced in NextJS architecture and development</li>
            <li>Experienced in Linux systems administration</li>
            <li>Experienced in GCP, Digital Ocean, Linode devops</li>
            <li>Experienced in setup of Continuous Integration services</li>
            <li>
              Some experience with Godot, C#, Kotlin, React Native, Python,
              ElectronJS
            </li>
            <li>Some experience with AWS devops</li>
          </ul>
        </p>
        <div className="c_aboutPage__backbtn">
          <TextButton path="/" text="back to home" />
        </div>
      </div>
    </StaticPage>
  );
};

export default About;
