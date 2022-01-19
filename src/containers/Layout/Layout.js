import { Outlet } from "react-router-dom";
import { ScreenClassProvider } from "react-grid-system";
// import { Header } from "components";

function Layout() {
  return (
    <ScreenClassProvider>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </ScreenClassProvider>
  );
}

export default Layout;
