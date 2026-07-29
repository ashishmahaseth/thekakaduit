"use client";

import Image from "next/image";

export default function Logo({ width = 40, height = 40 }: { width?: number; height?: number }) {
  return (
    <div className="relative" style={{ width, height }}>
      <Image
        src="/thekakaduit/images/kakadu-logo.jpg"
        alt="Kakadu IT Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}
