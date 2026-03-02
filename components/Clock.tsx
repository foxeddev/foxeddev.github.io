"use client";

import { useEffect, useState } from "react";

export default function Clock({
  showSeconds = true,
  showSubtext = true,
}: {
  showSeconds?: boolean;
  showSubtext?: boolean;
}) {
  const now = new Date();
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const updateTime = () => {
    setTime({
      hours: now.getHours().toString().padStart(2, "0"),
      minutes: now.getMinutes().toString().padStart(2, "0"),
      seconds: now.getSeconds().toString().padStart(2, "0"),
    });
  };

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 100);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-col justify-center gap-4 bg-bg shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[8px_8px_0_0_var(--color-primary)] p-8 text-center transition hover:-translate-2">
      <p className="font-mono font-bold text-primary text-5xl">
        {/* Hours */}
        <span className="relative">
          {showSubtext ? (
            <small className="top-14 absolute text-sm">hours</small>
          ) : (
            ""
          )}
          {time.hours}
        </span>

        <span>:</span>

        {/* Minutes */}
        <span className="relative">
          {showSubtext && (
            <small className="top-14 absolute text-sm">minutes</small>
          )}
          {time.minutes}
        </span>

        {showSeconds ? (
          <>
            <span>:</span>

            {/* Seconds */}
            <span className="relative">
              {showSubtext && (
                <small className="top-14 absolute text-sm">seconds</small>
              )}
              {time.seconds}
            </span>
          </>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
