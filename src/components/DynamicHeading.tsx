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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1200);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && text === currentPhrase) {
      const timeout = setTimeout(() => {
        setIsPaused(true);
      }, 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 400);
      return () => clearTimeout(timeout);
    }

    const speed = isDeleting ? 25 : 55;

    const timeout = setTimeout(() => {
      setText((prev) => {
        if (isDeleting) {
          return currentPhrase.slice(0, prev.length - 1);
        }
        return currentPhrase.slice(0, prev.length + 1);
      });
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, isPaused]);

  return (
    <span className="text-brand-green relative inline-block">
      {text}
      <span className="inline-block w-[3px] h-[0.85em] bg-brand-green ml-0.5 align-middle animate-cursor-blink" />
    </span>
  );
}
