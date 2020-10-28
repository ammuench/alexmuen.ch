import React from 'react';

import StaticPage from '../components/StaticPage';
import TextButton from '../components/TextButton';

const About = () => {
    return (
        <StaticPage pageTitle="alex muench | about me       ">
            <div className="c_aboutPage">
                <h2 className="c_aboutPage__header">About Me</h2>
                <img className="c_aboutPage__profile" src="/assets/profile-tall.jpeg"/>
                <p>
                    Hello!  My name is Alex Muench.  I'm a software developer with over 7 years of professional experience.  I grew up just outside of Chicago, and have been living in the city since 2013.
                </p>
                <p>
                    I have been tinkering with computers and programming since a child, and have been making websites since the days of Geocities.  I'm also passionate about marine biology and the environment around us.  I pursued both these topics in College, and graduated from the University of Notre Dame with a double major in Environmental Science and Computer Applications.
                </p>
                <p>
                    I've done the majority of my professional work in various agencies and consulting firms.  I've done stints at Acquity Group, Accenture, and am currently at Nerdery.  This has allowed me to have a broad exposure to many different industries, projects, and techniques in my career.
                </p>
                <p>
                    I've also been heavily invested in the esports scene.  From 2016-2018 I was involved with running the largest, amateur Dota 2 leagues at the time.  And though I eventually moved on, the experience of running teams and serving international groups of players was exciting and a massive learning experience.  After wrapping up my work in Dota 2 leagues, I was approached by GGLeagues, a company focused on helping organization connect with their communities through esports, and offered the CTO role. At GGLeagues, I am currently building our web application and growing our tech team.
                </p>
                <p>
                    My primary focus is in Front-End development, but I also have a strong foundation in devops (building and mainting linux servers and services) and experience with Python and Mobile Development.
                </p>
                <p>
                    Outside of development, I've gotten very big into birding and bird photography.  <a href="https://ebird.org/profile/MTc4NzYzOQ" target="_blank">You can see my photography and progress over on eBird!</a>
                </p>
                <p>
                    <h3 className="c_aboutPage__skillsHeader">Skills: </h3>
                    <ul>
                        <li>Proficient in general Front-End Development w/ Typescript</li>
                        <li>Proficient in Angular Framework Architecture and Development</li>
                        <li>Experienced in React, Inferno, VueJS, and NextJS</li>
                        <li>Experienced in Bash, Python</li>
                        <li>Experienced in Linux Systems administration</li>
                        <li>Experienced in NGINX web hosting</li>
                        <li>Experienced in setup of Continuous Integration services</li>
                        <li>Some experience with Godot (GodotScript), C#, Kotlin, React Native</li> 
                    </ul>
                </p>
                <div className="c_aboutPage__backbtn">
                    <TextButton path="/" text="back to home" />
                </div>
            </div>
        </StaticPage>
    )
};

export default About