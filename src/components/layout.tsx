import React from "react";
import NavBar from "./nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen min-h-svh relative overflow-x-hidden">
      <NavBar />
      <div className="max-w-6xl mx-auto overflow-x-hidden">{children}</div>
    </div>
  );
}
