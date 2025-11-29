"use client";

import { HTMLAttributes, ReactNode } from "react";
import toast from "react-hot-toast";

interface CopyProps extends HTMLAttributes<HTMLDivElement> {
  copytext: string;
  children: ReactNode;
}

export default function Copy(props: CopyProps) {
  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard!", {
      icon: "📋",
    });
  };

  return (
    <div onClick={() => copy(props.copytext)} {...props}>
      {props.children}
    </div>
  );
}
