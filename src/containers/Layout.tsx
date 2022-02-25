import { Outlet } from "react-router-dom";

// import { Header } from "components";

function Layout() {
  //  <Header />
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Layout;
