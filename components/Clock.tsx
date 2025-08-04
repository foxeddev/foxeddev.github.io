"use client";

import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

export default function Clock({
  showSeconds = false,
  showSubtext = false,
}: {
  showSeconds?: boolean;
  showSubtext?: boolean;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    <h3 className={styles.clock}>
      {/* Hours */}
      <span>
        {showSubtext ? <small>hours</small> : ""}
        {isClient ? time.hours : "##"}
      </span>

      <span>:</span>

      {/* Minutes */}
      <span>
        {showSubtext && <small>minutes</small>}
        {isClient ? time.minutes : "##"}
      </span>

      {showSeconds ? (
        <>
          <span>:</span>

          {/* Seconds */}
          <span>
            {showSubtext && <small>seconds</small>}
            {isClient ? time.seconds : "##"}
          </span>
        </>
      ) : (
        ""
      )}
    </h3>
  );
}
