import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  link: string;
  title?: string;
}

export default function BackButton({ link, title }: BackButtonProps) {
  return (
    <Link to={link}>
      <Button
        variant="ghost"
        className="glass-card backdrop-blur-xl text-foreground hover:scale-105 transition-all"
      >
        <ChevronLeft className="w-5 h-5 mr-2" />
        Back {title ? `to ${title}` : " "}
      </Button>
    </Link>
  );
}
