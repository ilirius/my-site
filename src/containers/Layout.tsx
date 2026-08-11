import { Outlet } from "react-router-dom";

// import { Header } from "~/components";

const Layout: React.FC = () => {
  //  <Header />
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Layout;
