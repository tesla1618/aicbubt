import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
