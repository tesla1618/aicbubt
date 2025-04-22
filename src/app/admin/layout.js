// import Sidebar from "../../components/admin/Sidebar";
// import Navbar from "../../components/admin/Navbar";
// import Footer from "../../components/admin/Footer";
import "../globals.css";
import AdminProvider from "../../components/providers/AdminProvider";

export default function AdminLayout({ children }) {
  return <AdminProvider>{children}</AdminProvider>;
}
