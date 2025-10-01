import React from "react";
import NavBar from "./nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen min-h-svh relative overscroll-x-none">
      <NavBar />
      <div className=" container mx-auto min-w-screen ">{children}</div>
    </div>
  );
}
