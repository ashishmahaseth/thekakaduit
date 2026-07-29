"use client";

import { useState, useEffect } from "react";

const words = [
  "Managed IT Services",
  "Cloud Infrastructure",
  "Cybersecurity",
  "Microsoft 365 Solutions",
  "IT Automation",
];

export default function DynamicText() {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const word = words[currentWord];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === word.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
        return;
      }

      const newText = isDeleting
        ? word.substring(0, charIndex - 1)
        : word.substring(0, charIndex + 1);

      setDisplayText(newText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentWord]);

  return (
    <span className="text-brand-green">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
