import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className=" bg-primary-900 text-primary-50 flex items-center h-14">
      <div className="container">
        <ul className="w-60 flex items-center justify-between">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
