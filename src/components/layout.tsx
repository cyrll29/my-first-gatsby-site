import * as React from 'react';
import { Link } from 'gatsby';
import { 
    container, 
    header,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }: any) => {
    return (
        <div className={container}>
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