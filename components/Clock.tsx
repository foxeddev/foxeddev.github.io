"use client";

import { useEffect, useState } from "react";

export default function Clock({
  hasSeconds = false,
  showSubtext = false,
}: {
  hasSeconds?: boolean;
  showSubtext?: boolean;
}) {
  const getTimeParts = () => {
    const now = new Date();
    return {
      hours: now.getHours().toString().padStart(2, "0"),
      minutes: now.getMinutes().toString().padStart(2, "0"),
      seconds: now.getSeconds().toString().padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(getTimeParts());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeParts());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h3 className="flex md:flex-row flex-col gap-4 md:gap-0 font-mono font-bold text-indigo-600 text-5xl">
      {/* Hours */}
      <span className="relative">
        {showSubtext ? (
          <small className="-bottom-2.5 absolute text-sm">hours</small>
        ) : (
          ""
        )}
        {time.hours}
      </span>

      <span className="hidden md:inline">:</span>

      {/* Minutes */}
      <span className="relative">
        {showSubtext && (
          <small className="-bottom-2.5 absolute text-sm">minutes</small>
        )}
        {time.minutes}
      </span>

      {hasSeconds ? (
        <>
          <span className="hidden md:inline">:</span>

          {/* Seconds */}
          <span className="relative">
            {showSubtext && (
              <small className="-bottom-2.5 absolute text-sm">seconds</small>
            )}
            {time.seconds}
          </span>
        </>
      ) : (
        ""
      )}
    </h3>
  );
}
