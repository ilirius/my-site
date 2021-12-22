import { Header } from "../../components";

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}

export default Layout;
