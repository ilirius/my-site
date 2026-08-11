import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ROUTE_MAP from '~/routes/routes';

import '~/styles/app.css';
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

const router = createBrowserRouter(ROUTE_MAP);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
