import Link from 'next/link';
import classes from './NavbarTop.module.css'
import LanguageOptions from '../LanguageOptions/LanguageOptions';
import { t } from 'react-switch-lang';

import Image from 'next/image'
const NavbarTop = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}><Link href="/"><Image width={250} height={250} src={`/img/Amplitudo.svg`} /></Link></div>
            <nav>
                <ul>
                    <li><Link href='/software-development'>{t('navbar.softwareDev')}</Link></li>
                    <li><Link href='/innovation'>{t('navbar.innovation')}</Link></li>
                    <li><Link href='/academy'>{t('navbar.academy')}</Link></li>
                    <li><Link href='/join'>{t('navbar.joinUs')}</Link></li>
                    <li><Link href='/blog'>{t('navbar.blog')}</Link></li>
                    <li><Link href='/about'>{t('navbar.about')}</Link></li>
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