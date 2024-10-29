// app/page.js
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HomeContent from "../component/homecomponent";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login"); // Redirect to login if not logged in
    }
  }, [router]);

  return <HomeContent />; // Render home content if logged in
}
