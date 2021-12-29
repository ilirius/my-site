import { memo, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "containers";

import * as Pages from "pages";

import "./App.css";

/*
Главная
Кто я?
Что я умею?
Что я сделал?
Как со мной связаться?

Home
Who am I?
What can I do?
What have I done?
How to contact me?

  const { i18n } = useTranslation();

  const handelChange = (evt) => {
    i18n.changeLanguage(evt.target.value);
  };
*/

let App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Layout>
          <Routes>
            <Route path="/" element={<Pages.Home />} />
            <Route path="about" element={<Pages.About />} />
            <Route path="contact" element={<Pages.Contact />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

App = memo(App);

export default App;
