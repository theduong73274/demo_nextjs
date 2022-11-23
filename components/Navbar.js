import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="">
        <Link href="/">Coder</Link>
      </div>
      <div className="">
        <Link href="/about">About</Link>
        <Link href="/coders">All Coders</Link>
      </div>
    </nav>
  );
}
