import React from 'react';

import StaticPage from '../components/StaticPage';
import TextButton from '../components/TextButton';

const Work = () => {
    return (
        <StaticPage pageTitle="alexmuen.ch | My Work">
            <div className="c_workPage">
                <h2 className="c_workPage__header">Projects</h2>
                <p>
                    I have been lucky enough to contribute and work with major Fortune 500 companies in my time working with multiple development agencies and consulting firms.  I have particular experience in both eCommerce and Medical projects.
                </p>
                <p>
                    Outside of professional work, I also build some fun microsites:
                </p>
                <p>
                    <a href="https://vaporwave.fish" target="_blank">Vaporwave.fish</a>: a vaporwave streaming website with aesthetic fish vibes
                </p>
                <p>
                    <a href="https://catfact.page" target="_blank">Catfact.page</a>: a microsite that delivers on-demand cat facts
                </p>
                <p>
                    I have also built and maintain several NPM packages:
                </p>
                <p>
                    <a href="https://github.com/ammuench/extra-life-api" target="_blank">extra-life-api</a>: the official node package for integration with the Extra Life charity donation API
                </p>
                <p>
                    <a href="https://github.com/ammuench/node-artifact-api" target="_blank">node-artifact-api</a>: a typescript based implemation of Valve's Artifact API, allowing users to build, encode, and store decks
                </p>
                <p>
                    You can find other various work samples & projects over on my GitHub as well
                    <div className="c_workPage__backbtn">
                        <TextButton path="https://github.com/ammuench" text="My Github"/>
                    </div>
                </p>
                <h2 className="c_workPage__header">work history</h2>
                <p>
                    I am currently employed full-time as a Senior Front-End Software Engineer at <a href="https://www.nerdery.com/" target="_blank">Nerdery</a> in Chicago.  I started in January of 2018.  My duties include development, technical team management on client projects, and general technology consulting around best practices and strategies for my clients.
                </p>

                <p>
                    I am also currently working as the Chief Technology Officer at  at <a href="https://www.ggleagues.com/" target="_blank">GGLeagues</a>, also in Chicago.  I started in April of 2018.  My duties include managing the devops of our production applications, architecting and building our Web Application, and growing and managing our development and tech team at the company.
                </p>
                <p>
                    Prior to Nerdery & GGLeagues, I spent 5 years working at <a href="https://www.accenture.com/us-en/about/interactive-index" target="_blank">Accenture Interactive</a> and <a href="https://en.wikipedia.org/wiki/Acquity_Group" target="_blank">Acquity Group (now owned by Accenture Interactive)</a>.  I began as an associate level developer, working as team members on various client projects, and was promoted up to Senior Front-End Developer where I took on larger team management and project architecture roles.
                </p>
                <div className="c_workPage__backbtn">
                    <TextButton path="/" text="back to home" />
                </div>
            </div>
        </StaticPage>
    )
};

export default Work;