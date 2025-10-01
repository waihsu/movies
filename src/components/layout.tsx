import React from "react";
import NavBar from "./nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-screen bg-chart-5 min-h-screen">
      <NavBar />
      {children}
    </div>
  );
}
