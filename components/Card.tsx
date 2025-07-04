import React from "react";
import { IconType } from "react-icons";

export default function Card({
  children,
  icon,
  align = "center",
  cols = 1,
  rows = 1,
}: {
  children: React.ReactNode;
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
      className={`flex flex-col gap-8 bg-white p-8 justify-center ${alignClass}`}
      style={{
        gridColumnEnd: `span ${cols}`,
        gridRowEnd: `span ${rows}`,
      }}
    >
      {icon
        ? React.createElement(icon, { size: 48, className: "fill-pink-400" })
        : null}
      {children}
    </div>
  );
}
