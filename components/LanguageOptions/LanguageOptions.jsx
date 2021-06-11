import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { t } from 'react-switch-lang';

const LanguageOptions = () => {
    // const ISSERVER = typeof window == 'undefined'
    // if (!ISSERVER) { }
    // const lang = localStorage.getItem('lang');

    // function handleSetLanguage(key) {
    //     localStorage.setItem('lang', key);
    //     window.location.reload();

    // }


    return (
        <>
            <NavDropdown
                title={t('navbar.language')}
                id="basic-nav-dropdown"
                className="language-options"
            >
                {/* <NavDropdown.Item
                    onClick={() => handleSetLanguage('mne')}
                // className={lang === 'mne' || !lang ? 'active' : ''}
                >
                    {t('navbar.mne')}
                </NavDropdown.Item>

                <NavDropdown.Item
                    id="eng"
                    onClick={() => handleSetLanguage('eng')}
                // className={lang === 'eng' ? 'active' : ''}
                >
                    {t('navbar.eng')}
                </NavDropdown.Item> */}
            </NavDropdown>
        </>
    );

};

export default LanguageOptions;