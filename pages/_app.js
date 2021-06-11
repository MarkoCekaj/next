import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { setDefaultTranslations, setDefaultLanguage } from 'react-switch-lang';
import eng from '../language/eng.json'
import mne from '../language/mne.json'

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    setDefaultTranslations({ eng, mne });
    const lang = localStorage.getItem('lang');
    lang ? setDefaultLanguage(lang) : setDefaultLanguage('mne');
  }
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
