import Link from "next/link";
import React from "react";

export default function PostCart({ item }) {
  return (
    <Link href={`/post/${item.id}`}>
      <div className="m-4 p-4 text-center w-64 h-28 text-base text-primary-200 bg-primary-700 font-medium f shadow-sm shadow-primary-500 cursor-pointer hover:bg-primary-600 hover:text-secondary-500">
        {item.title}
      </div>
    </Link>
  );
}
