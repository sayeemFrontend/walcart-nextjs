import React from "react";

export default function Display({ children }) {
  return (
    <div className="flex gap-4 items-center flex-row flex-wrap justify-center md:justify-start">
      {children}
    </div>
  );
}
