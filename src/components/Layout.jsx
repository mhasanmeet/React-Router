import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
        <Header/>
          <main>
            {/* Get <Layout/> routes wrapper (all routes) from app.jsx */}
            <Outlet/>
          </main>
        <Footer/>
    </>
  )
}

export default Layout