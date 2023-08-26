import React from "react";

import StaticPage from "../components/StaticPage";
import TextButton from "../components/TextButton";

const Work = () => {
  return (
    <StaticPage pageTitle="alex muench | my work">
      <div className="c_workPage">
        <h2 className="c_workPage__header">Projects</h2>
        <p>
          I have been lucky enough to contribute and work with major Fortune 500
          companies in my time working with multiple development agencies and
          consulting firms. I have particular experience in both eCommerce and
          Medical projects.
        </p>
        <p>My currently maintained projects:</p>
        <ul>
          <li>
            <a rel="noopener" href="https://www.ggleagues.com" target="_blank">
              GGLeagues.com Home
            </a>
            : A NextJS collection of static, promotional, and marketing pages
            for GGLeagues, with a focus on speed and SEO
          </li>
          <li>
            <a rel="noopener" href="https://app.ggleagues.com" target="_blank">
              GGLeagues.com Webapp
            </a>
            : An Angular 11 Application that handles our user-facing
            tournaments, registration, chat system, and payment processing
          </li>
        </ul>
        <p>Outside of professional work, I also build some fun microsites:</p>
        <ul>
          <li>
            <a rel="noopener" href="https://catfact.page" target="_blank">
              Catfact.Page
            </a>
            : A website that gives you a random catfact and image!
          </li>
          <li>
            <a rel="noopener" href="https://itsallno.de" target="_blank">
              its all node
            </a>
            : it's all node? always has been.
          </li>
          <li>
            <a rel="noopener" href="https://vaporwave.fish" target="_blank">
              Vaporwave.fish
            </a>
            : a vaporwave streaming website with aesthetic fish vibes
          </li>
        </ul>
        <p>I have also built and maintain several NPM packages:</p>
        <ul>
          <li>
            <a
              rel="noopener"
              href="https://github.com/ammuench/extra-life-api"
              target="_blank"
            >
              extra-life-api
            </a>
            : the official node package for integration with the Extra Life
            charity donation API
          </li>
          <li>
            <a
              rel="noopener"
              href="https://github.com/ammuench/node-artifact-api"
              target="_blank"
            >
              node-artifact-api
            </a>
            : a typescript based implemation of Valve's Artifact API, allowing
            users to build, encode, and store decks
          </li>
        </ul>
        <p>
          You can find other various work samples & projects over on my GitHub
          as well
          <div className="c_workPage__backbtn">
            <TextButton path="https://github.com/ammuench" text="My Github" />
          </div>
        </p>
        <h2 className="c_workPage__header">work history</h2>
        <p>
          I am currently working at{" "}
          <a href="https://HotelEngine.com">HotelEngine</a>&nbsp; as a{" "}
          <strong>Staff Software Engineer</strong> as of <em>August 2023</em>,
          where I am focused on helping architect and develop their Web & Mobile
          Applications!
        </p>
        <ul>
          <li>
            <p style={{ marginTop: "1.5rem" }}>
              <strong>
                <a
                  rel="noopener"
                  href="https://www.carta.healthcare/"
                  target="_blank"
                >
                  Carta Healthcare :: Senior UI/UX Engineer
                </a>
              </strong>
              <em> (March 2023 - August 2023)</em>
            </p>
            I helped modernize Carta's front-end UI by translating the codebase
            into Typescript, as well as building out a new in-house component
            library (based on Tailwind and Flowbite) and building out brand new
            features to help assist the abstraction team in their data
            processing efforts
          </li>
          <li>
            <p style={{ marginTop: "1.5rem" }}>
              <strong>
                <a
                  rel="noopener"
                  href="https://strategypoint.co"
                  target="_blank"
                >
                  Strategypoint :: Staff Software Engineer
                </a>
              </strong>
              <em> (August 2022 - March 2023)</em>
            </p>
            I helped a small team create Business Strategy Software that tried
            to make strategy simple and accessible for anyone! I joined as an
            experienced contributer, and helped modernize both the front-end and
            back-end systems and develop several new flagship features for the
            product, working directly with their CTO.
          </li>
          <li>
            <p style={{ marginTop: "1.5rem" }}>
              <strong>
                <a rel="noopener" href="https://ggleagues.com" target="_blank">
                  GGLeagues :: Chief Technology Officer
                </a>
              </strong>
              <em> (April 2018 - August 2022)</em>
            </p>
            I started in April of 2018 in a part-time capacity and transition to
            full-time in February of 2021. My duties included managing the
            devops of our production applications, architecting and building our
            web applications, and growing and managing our development and tech
            team at the company. I also helped mentor our junior engineers and
            was deeply involved with the fundraising process.
          </li>
          <li>
            <p style={{ marginTop: "1.5rem" }}>
              <strong>
                <a rel="noopener" href="https://nerdery.com" target="_blank">
                  Nerdery :: Senior Front-End Engineer
                </a>
              </strong>
              <em> (January 2018 - January 2021)</em>
            </p>
            At Nerdery my duties included software development, technical team
            management on client projects, and general technology consulting
            around best practices and strategies for my clients.
          </li>
          <li>
            <p style={{ marginTop: "1.5rem" }}>
              <strong>
                <a rel="noopener" href="https://echoleague.gg" target="_blank">
                  EchoLeague :: Founder & Lead Developer
                </a>
              </strong>
              <em> (January 2017 - May 2018)</em>
            </p>
            I founded, organized, and built the software for the largest Dota 2
            Amateur league of its time with over 3000 members. I assembled a
            team of developers, broadcasters, and community managers to grow the
            community from the ground up and build a full webapp and software
            suite to power our competitions. We closed our leagues in 2018 as I
            moved into my role at GGLeagues and mulitiple other founding members
            found success within the esports industry in broadcasting, event
            management, and more.
          </li>
          <li>
            <p style={{ marginTop: "1.5rem" }}>
              <strong>
                <a
                  rel="noopener"
                  href="https://www.accenture.com/us-en/about/accenture-song-index"
                  target="_blank"
                >
                  Accenture Song :: Senior Front-End Developer
                </a>
              </strong>
              <em> (June 2013 - January 2018)</em>
            </p>
            I began as an associate level developer (originally at Acquity Group
            which was acquired by Accenture), working as team members on various
            client projects, and was promoted up to Senior Front-End Developer
            where I took on larger team management and project architecture
            roles. In my last two years I served as a Senior Staff-Augment
            resource for Walmart Labs, helping build and release multiple
            features for Walmart.com
          </li>
        </ul>
        <div className="c_workPage__backbtn">
          <TextButton path="/" text="back to home" />
        </div>
      </div>
    </StaticPage>
  );
};

export default Work;
