import { reactLogo } from "@/lib/logoAssets";
import React from "react";
import { Spinner } from "./ui/spinner";

interface LoadingProps {
  height: number;
}

export default function Loading({ height }: LoadingProps) {
  return <Spinner />;
}
