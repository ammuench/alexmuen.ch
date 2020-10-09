import React from 'react';
import Head from 'next/head';
import NavLink from './NavLink';

interface StaticPageProps {
    children: JSX.Element | JSX.Element[];
    pageTitle: string;
    hideHeader?: boolean;
}

const CopyrightInfo = (): JSX.Element => {
    return <p>
        Everything else &copy; 2018 - {new Date().getFullYear()} Alex Muench
    </p>
}

const StaticPage = ({ children, pageTitle, hideHeader }: StaticPageProps) => {
    return (
        <div className={`o_staticPage ${hideHeader ? 'o_staticPage--noheader' : null}`}>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            { !hideHeader &&
                <header className="o_staticPage__header c_header">
                    <h1 className="c_header__text">alex muench</h1>
                    <div className="c_header__linkContainer">
                        <NavLink path="/about.html" text="About"/>
                        <NavLink path="/work.html" text="work"/>
                    </div>
                </header>
            }
            <main className="o_staticPage__main">
                {children}
            </main>
            <footer className="o_staticPage__footer">
                <p>Icons made by <a target="_blank" href="https://www.flaticon.com/free-icon/next_709486?term=arrow&page=1&position=20" title="Kiranshastry">Kiranshastry</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p>Illustrations by <a target="_blank" href="https://dribbble.com/Ivan_Haidutski">Ivan Haidutski</a> and <a target="_blank" href="https://icons8.com/">Icons8</a> from <a target="_blank" href="https://icons8.com/">Icons8</a></p>
                <CopyrightInfo></CopyrightInfo>
            </footer>
        </div>
    )
}
export default StaticPage;