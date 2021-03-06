import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import { App } from './app';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-149581821-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// Scroll to top on boot
window.onbeforeunload = () => {
    window.scrollTo({
        top: 0,
    });
};

const rootElement = document.getElementById('root');
if (rootElement!.hasChildNodes()) {
    hydrate(<App/>, rootElement);

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register();
} else {
    render(<App/>, rootElement);
    serviceWorker.register();
}
