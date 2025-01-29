import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { 
    container, 
    header,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css'

import { useSiteMetadata } from '../hooks/useSiteMetadata';


const Layout = ({ pageTitle, children }: any) => {
    const { title } = useSiteMetadata()

    return (
        <div className={container}>
            <header className={siteTitle}>{title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to='/' className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/about' className={navLinkText}>About</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={header}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;