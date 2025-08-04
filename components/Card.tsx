import React from "react";
import styles from "./Card.module.css";

export default function Card({
  children,
  align = "center",
  cols = 1,
  rows = 1,
  noPad = false,
}: {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  cols?: number;
  rows?: number;
  noPad?: boolean;
}) {
  const alignClass =
    {
      left: styles.left,
      right: styles.right,
      center: styles.center,
    }[align] || "";

  return (
    <div
      className={`${styles.card} ${alignClass}`.trim()}
      style={{
        ...(cols !== 1 && { gridColumnEnd: `span ${cols}` }),
        ...(rows !== 1 && { gridRowEnd: `span ${rows}` }),
        ...(noPad && { padding: 0 }),
      }}
    >
      {children}
    </div>
  );
}
