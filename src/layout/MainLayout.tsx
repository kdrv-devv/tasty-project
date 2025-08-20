import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
  import { ToastContainer } from 'react-toastify';
import AuthModal from "../generics/modals/AuthModal";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer/>
      <AuthModal/>
    </>
  );
};

export default MainLayout;
