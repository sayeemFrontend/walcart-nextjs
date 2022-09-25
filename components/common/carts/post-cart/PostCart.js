import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowIcon from "./../../../../assets/rightA.svg";
export default function PostCart({ item }) {
  return (
    <Link href={`/post/${item.id}`}>
      <div className="relative m-4 p-4 text-center w-56 h-32 text-base text-primary-200 bg-primary-800 font-medium  shadow-sm shadow-primary-700 cursor-pointer hover:bg-primary-600 hover:text-secondary-500">
        {item.title}
        <div className="absolute right-4 top-12">
          <Image width={16} height={16} src={arrowIcon} alt="" />
        </div>
      </div>
    </Link>
  );
}
