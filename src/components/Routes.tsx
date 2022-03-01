import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';

import Home from 'pages/Home';

const Layout = lazy(() => import('containers/Layout'));
const NotFount = lazy(() => import('pages/NotFount'));
const About = lazy(() => import('pages/About'));
const Portfolio = lazy(() => import('pages/Portfolio'));
const Contact = lazy(() => import('pages/Contact'));
const Skills = lazy(() => import('pages/Skills'));

function RoutesComponent(): React.ReactElement {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="portfolio/" element={<Portfolio />} />
          <Route path="skills/" element={<Skills />} />
        </Route>
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
}

export default RoutesComponent;
