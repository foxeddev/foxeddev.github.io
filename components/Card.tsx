import React from "react";
import { IconType } from "react-icons";

export default function Card({
  children,
  className = "",
  icon,
  align = "center",
  cols = 1,
  rows = 1,
}: {
  children: React.ReactNode;
  className?: string;
  icon?: IconType;
  align?: "left" | "center" | "right";
  cols?: number;
  rows?: number;
}) {
  const alignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <div
      className={`flex flex-col gap-2 bg-white p-8 justify-center ${alignClass} ${className}`}
      style={{
        gridColumnEnd: `span ${cols}`,
        gridRowEnd: `span ${rows}`,
      }}
    >
      {icon
        ? React.createElement(icon, {
            size: 48,
            className: "fill-pink-400 m-4",
          })
        : null}
      {children}
    </div>
  );
}
