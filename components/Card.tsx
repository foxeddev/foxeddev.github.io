export default function Card({
  children,
  align = "center",
  cols = 1,
  rows = 1,
}: Readonly<{
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  cols?: number;
  rows?: number;
}>) {
  // Map align prop to Tailwind CSS classes
  const alignClass =
    align === "left"
      ? "items-start text-left after:left-0"
      : align === "right"
      ? "items-end text-right after:right-0"
      : "items-center text-center";

  return (
    <div
      className={`after:bottom-0 after:absolute relative flex flex-col gap-8 col-span-$(cols) bg-white after:bg-sky-300 p-8 after:w-[0%] hover:after:w-full after:h-1 after:content-[''] after:transition-all ${alignClass}`}
      style={{
        gridColumnEnd: `span ${cols}`,
        gridRowEnd: `span ${rows}`,
      }}
    >
      {children}
    </div>
  );
}
