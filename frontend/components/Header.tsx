"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export function Header() {
  return (
    <nav className="flex w-full h-fit py-6 justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src="/salary-logo.svg"
          alt="Encrypted Salary Compare Logo"
          width={50}
          height={50}
        />
        <h1 className="text-2xl font-bold text-gray-800">Encrypted Salary Compare</h1>
      </div>
      <div className="z-10">
        <ConnectButton />
      </div>
    </nav>
  );
}

