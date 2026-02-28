"use client";

import { useEffect, useRef } from "react";

export default function AlternateCaseTranslator() {
  const input = useRef<HTMLTextAreaElement>(null);
  const output = useRef<HTMLTextAreaElement>(null);

  function hasUpperVariant(str: string) {
    return str.toLowerCase() !== str.toUpperCase();
  }

  function alternateCase(str: string) {
    let result = "";
    let makeUpper = true;

    for (const char of str) {
      if (hasUpperVariant(char)) {
        result += makeUpper ? char.toUpperCase() : char.toLowerCase();
        makeUpper = !makeUpper;
      } else {
        result += char;
      }
    }

    return result;
  }

  useEffect(() => {
    if (input.current) {
      input.current.addEventListener("input", () => {
        if (output.current && input.current) {
          output.current.value = alternateCase(input.current.value);
        }
      });
    }
  });

  return (
    <div className="flex flex-row justify-center gap-4 col-span-2 bg-bg p-4 rounded-4xl">
      <textarea
        ref={input}
        rows={4}
        className="bg-white p-3 border border-black/20 rounded-2xl outline-none w-full text-black text-2xl resize-none"
      ></textarea>
      <textarea
        ref={output}
        rows={4}
        readOnly
        placeholder="Alternate Case"
        className="bg-black/5 p-3 border-none rounded-2xl outline-none w-full text-black text-2xl resize-none"
      ></textarea>
    </div>
  );
}
