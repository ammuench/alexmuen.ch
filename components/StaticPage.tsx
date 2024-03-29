import React from "react";
import Head from "next/head";
import NavLink from "./NavLink";
import Link from "next/link";

interface StaticPageProps {
  children: JSX.Element | JSX.Element[];
  pageTitle: string;
  hideHeader?: boolean;
}

const CopyrightInfo = (): JSX.Element => {
  return (
    <p>Everything else &copy; 2018 - {new Date().getFullYear()} Alex Muench</p>
  );
};

const DEFAULT_META_CONTENT = `Alex Muench is a Software Developer from Chicago, IL with over 7 years of professional development experience.`;

const StaticPage = ({ children, pageTitle, hideHeader }: StaticPageProps) => {
  return (
    <div
      className={`o_staticPage ${hideHeader ? "o_staticPage--noheader" : null}`}
    >
      <Head>
        <title>{pageTitle}</title>

        <meta name="title" content={pageTitle} />
        <meta name="description" content={DEFAULT_META_CONTENT} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alexmuen.ch" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={DEFAULT_META_CONTENT} />
        <meta property="og:image" content="https://alexmuen.ch/meta.png" />

        {/* <!-- Twitter --/> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alexmuen.ch" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={DEFAULT_META_CONTENT} />
        <meta
          property="twitter:image"
          content="https://alexmuen.ch/meta.png"
        ></meta>
        {/* LD+JSON */}
        <script
          type="applictation/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{"@context": "http://schema.org/","@type": "Person","name": "Alex Muench","jobTitle": "Software Developer","url": "https://alexmuen.ch"}`,
          }}
        ></script>
      </Head>
      {!hideHeader && (
        <header className="o_staticPage__header c_header">
          <h1 className="c_header__text">
            <Link href="/">
              <a>
                <span>a</span>
                <span className="c_header__text--hidemobile">l</span>
                <span className="c_header__text--hidemobile">e</span>
                <span className="c_header__text--hidemobile">x</span>
                <span className="c_header__text--hidemobile">&nbsp;</span>
                <span>m</span>
                <span className="c_header__text--hidemobile">u</span>
                <span className="c_header__text--hidemobile">e</span>
                <span className="c_header__text--hidemobile">n</span>
                <span className="c_header__text--hidemobile">c</span>
                <span className="c_header__text--hidemobile">h</span>
              </a>
            </Link>
          </h1>
          <div className="c_header__linkContainer">
            <NavLink path="/about" text="About" />
            <NavLink path="/work" text="work" />
            <NavLink
              path="https://ebird.org/profile/MTc4NzYzOQ/world"
              target="_blank"
              rel="noopener"
              text="birds"
            />
          </div>
        </header>
      )}
      <main className="o_staticPage__main">{children}</main>
      <footer className="o_staticPage__footer">
        <p>
          Icons made by{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://www.flaticon.com/free-icon/next_709486?term=arrow&page=1&position=20"
            title="Kiranshastry"
          >
            Kiranshastry
          </a>{" "}
          from{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </p>
        <p>
          Illustrations by{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://dribbble.com/Ivan_Haidutski"
          >
            Ivan Haidutski
          </a>{" "}
          and{" "}
          <a target="_blank" rel="noopener" href="https://icons8.com/">
            Icons8
          </a>{" "}
          from{" "}
          <a target="_blank" rel="noopener" href="https://icons8.com/">
            Icons8
          </a>
        </p>
        <CopyrightInfo></CopyrightInfo>
      </footer>
    </div>
  );
};
export default StaticPage;
