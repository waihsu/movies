import { reactLogo } from "@/lib/logoAssets";
import React from "react";

interface LoadingProps {
  height: number;
}

export default function Loading({ height }: LoadingProps) {
  return (
    <img
      src={reactLogo}
      alt="React Logo"
      className={`h-${height}  p-3 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]`}
    />
  );
}
