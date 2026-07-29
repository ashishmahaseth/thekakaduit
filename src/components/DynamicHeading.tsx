"use client";

import { useState, useEffect } from "react";

const phrases = [
  "Managed IT Services",
  "Cloud Infrastructure",
  "Cybersecurity",
  "Microsoft 365 Solutions",
  "IT Automation",
  "Network Infrastructure",
];

export default function DynamicHeading() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      if (text === currentPhrase) {
        setSpeed(2000);
        setTimeout(() => {
          setIsDeleting(true);
          setSpeed(40);
        }, speed);
        return;
      }
    } else {
      if (text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setSpeed(300);
        return;
      }
    }

    const timeout = setTimeout(() => {
      setText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return currentPhrase.slice(0, prev.length + 1);
      });
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, speed]);

  return (
    <span className="text-brand-green">
      {text}
      <span className="inline-block w-[3px] h-[0.9em] bg-brand-green ml-1 align-middle animate-pulse" />
    </span>
  );
}
