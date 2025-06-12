import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "sonner";

export default function AppLayout() {
  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
