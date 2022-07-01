import React from 'react';

import StaticPage from '../components/StaticPage';
import TextButton from '../components/TextButton';

const Work = () => {
    return (
        <StaticPage pageTitle="alex muench | my work">
            <div className="c_workPage">
                <h2 className="c_workPage__header">Projects</h2>
                <p>
                    I have been lucky enough to contribute and work with major Fortune 500 companies in my time working with multiple development agencies and consulting firms.  I have particular experience in both eCommerce and Medical projects.
                </p>
                <p>My currently maintained projects:</p>
                <ul>
                    <li>
                        <a rel="noopener" href="https://www.ggleagues.com" target="_blank">GGLeagues.com Home</a>: A NextJS collection of static, promotional, and marketing pages for GGLeagues, with a focus on speed and SEO</li>
                    <li>
                        <a rel="noopener" href="https://app.ggleagues.com" target="_blank">GGLeagues.com Webapp</a>: An Angular 11 Applcation that handles our user-facing tournaments, registration, chat system, and payment processing
                    </li>
                </ul>
                <p>
                    Outside of professional work, I also build some fun microsites:
                </p>
                <ul>
                    <li>
                        <a rel="noopener" href="https://itsallno.de" target="_blank">its all node</a>: it's all node?  always has been.
                    </li>
                    <li>
                        <a rel="noopener" href="https://vaporwave.fish" target="_blank">Vaporwave.fish</a>: a vaporwave streaming website with aesthetic fish vibes
                    </li>
                </ul>
                <p>
                    I have also built and maintain several NPM packages:
                </p>
                <ul>
                    <li>
                        <a rel="noopener" href="https://github.com/ammuench/extra-life-api" target="_blank">extra-life-api</a>: the official node package for integration with the Extra Life charity donation API

                    </li>
                    <li>
                        <a rel="noopener" href="https://github.com/ammuench/node-artifact-api" target="_blank">node-artifact-api</a>: a typescript based implemation of Valve's Artifact API, allowing users to build, encode, and store decks

                    </li>
                </ul>
                <p>
                    You can find other various work samples & projects over on my GitHub as well
                    <div className="c_workPage__backbtn">
                        <TextButton path="https://github.com/ammuench" text="My Github" />
                    </div>
                </p>
                <h2 className="c_workPage__header">work history</h2>
                <p>
                    I am currently working full-time as the Chief Technology Officer at <a rel="noopener" href="https://www.ggleagues.com/" target="_blank">GGLeagues</a> in Chicago.  I started in April of 2018 in a part-time capacity and transition to full-time in February of 2021.  My duties include managing the devops of our production applications, architecting and building our web applications, and growing and managing our development and tech team at the company.
                </p>
                <p>
                    Prior to GGLeagues, I spent 3 years as a Senior Front-End Software Engineer at <a rel="noopener" href="https://www.nerdery.com/" target="_blank">Nerdery</a> in Chicago.  I started in January of 2018.  My duties include software development, technical team management on client projects, and general technology consulting around best practices and strategies for my clients.
                </p>
                <p>
                    I was also the founder and lead developer of <a rel="noopener" href="https://echoleague.gg/" target="_blank">EchoLeague</a>, which was the largest Dota 2 Amateur league of its time with over 3000 members.  I assembled a team of developers, broadcasters, and community managers to grow the community from the ground up and build a full webapp and software suite to power our competitions.  We closed our leagues in 2018 as I moved into my role at GGLeagues and mulitiple other founding members found success within the esports industry in broadcasting, event management, and more.
                </p>
                <p>
                    Before that, I spent 5 years working at <a rel="noopener" href="https://www.accenture.com/us-en/about/interactive-index" target="_blank">Accenture Interactive</a> and <a rel="noopener" href="https://en.wikipedia.org/wiki/Acquity_Group" target="_blank">Acquity Group (now owned by Accenture Interactive)</a>.  I began as an associate level developer, working as team members on various client projects, and was promoted up to Senior Front-End Developer where I took on larger team management and project architecture roles.
                </p>
                <div className="c_workPage__backbtn">
                    <TextButton path="/" text="back to home" />
                </div>
            </div>
        </StaticPage>
    )
};

export default Work;