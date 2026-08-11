import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
// import { setConfiguration } from "react-grid-system";

import App from '~/app';
import reportWebVitals from '~/utils/reportWebVitals';

import "./i18n";

import 'reset.css';

// setConfiguration({ maxScreenClass: "xl" });

// Render your React component instead
const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
      <Suspense fallback="loading">
        <App />
      </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
