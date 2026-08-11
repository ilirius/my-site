import { type RouteObject } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { lazy } from 'react';

import Layout from '~/containers/Layout';
import Home from '~/pages/Home';
// const NotFount = lazy(() => import('~/pages/NotFount'));
// const About = lazy(() => import('~/pages/About'));
// const Portfolio = lazy(() => import('~/pages/Portfolio'));
// const Contact = lazy(() => import('~/pages/Contact'));
// const Skills = lazy(() => import('~/pages/Skills'));

// function RoutesComponent(): React.ReactElement {
//     return (
//         <div>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path="about/" element={<About />} />
//                     <Route path="contact/" element={<Contact />} />
//                     <Route path="portfolio/" element={<Portfolio />} />
//                     <Route path="skills/" element={<Skills />} />
//                 </Route>
//                 <Route path="*" element={<NotFount />} />
//             </Routes>
//         </div>
//     );
// }

// export default RoutesComponent;


const ROUTE_MAP: RouteObject[] = [{
  id: 'root',
  path: "/",
  element: <Layout />,
  children: [
    {
      id: 'home',
      index: true,
      element: <Home />
    },
    // {
    //     path:'*',
    //     id: 'NotFount',
    //     element: <NotFount />
    // }
  ]
}];

export default ROUTE_MAP;
