"use client";
import localFont from "next/font/local";
import Navbar from "../component/navbar";
import { SnackbarProvider } from "../component/snackbar";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/login", "/register"];
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SnackbarProvider>
          {!hideNavbarRoutes.includes(pathname) && <Navbar />}
          {children}
        </SnackbarProvider>
      </body>
    </html>
  );
}
