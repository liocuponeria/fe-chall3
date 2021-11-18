import '../styles/global.css';
import '../styles/pages/home.scss';
import '../styles/pages/produto.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }