import Link from 'next/link';
import classes from '../Navbar/NavbarTop.module.css'
import { t } from "react-switch-lang";
import LanguageOptions from '../LanguageOptions/LanguageOptions';
const NavbarTop = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}><Link href="/">AMPLITUDO</Link></div>
            <nav>
                <ul>
                    <li><Link href='/join'>{t('navbar.joinUs')}</Link></li>
                    <li><Link href='/blog'>{t('navbar.blog')}</Link></li>
                    <li><Link href='/about'>{t('navbar.innovation')}</Link></li>
                    <li><Link href='/contact'>{t('navbar.contact')}</Link></li>
                    <div className={classes.nav_language}>
                        <LanguageOptions />
                    </div>
                </ul>
            </nav>
        </header>
    )
}
export default NavbarTop