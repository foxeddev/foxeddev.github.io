"use client";

export default function SplitText({ text }: { text: string }) {
  const split = text.split("");

  return (
    <>
      {split.map((char, i) => (
        <span key={i} className="char" style={{ display: "inline-block" }}>
          {char}
        </span>
      ))}
    </>
  );
}
