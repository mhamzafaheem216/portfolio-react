import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import hamzaLogoFavicon from './Assets/hamzalogotab.png';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Replace the page favicon with the navbar logo at runtime (works in dev & production)
try {
  const setFavicon = (href) => {
    const head = document.getElementsByTagName('head')[0];
    let link = head.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = href;
  };

  // Wait until the root element is present and then set the favicon
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setFavicon(hamzaLogoFavicon);
  } else {
    window.addEventListener('DOMContentLoaded', () => setFavicon(hamzaLogoFavicon));
  }
} catch (e) {
  // non-fatal if running in a non-browser environment
  // console.warn('Could not set favicon at runtime', e);
}
