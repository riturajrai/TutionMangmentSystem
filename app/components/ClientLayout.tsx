"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Routes jahan Navbar/Footer nahi chahiye
  const hideLayoutRoutes = ["/login", "/signup"];

  const hideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <main>{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
}
