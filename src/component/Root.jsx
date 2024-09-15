import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Root = () => {
  return (
    <div className="bg-custom-gradient pt-11">
      <header>
        <Header />
      </header>
      <main>
      <Outlet />
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default Root;
