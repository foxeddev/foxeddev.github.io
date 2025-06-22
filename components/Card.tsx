export default function Card({
  children,
  align = "center",
  cols = 1,
  rows = 1,
}: {
  children: React.ReactNode;
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
      className={`after:bottom-0 after:absolute relative flex flex-col gap-8 col-span-$(cols) bg-white after:bg-sky-300 p-8 ${alignClass}`}
      style={{
        gridColumnEnd: `span ${cols}`,
        gridRowEnd: `span ${rows}`,
      }}
    >
      {children}
    </div>
  );
}
