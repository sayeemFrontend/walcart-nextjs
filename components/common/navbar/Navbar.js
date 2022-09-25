import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import cartIcon from "./../../../assets/Cart Icon.svg";

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const { cartList } = useSelector((state) => state.cart);
  return (
    <nav className=" bg-primary-900   z-10 sticky top-0 h-16">
      <div className="container h-full flex flex-wrap  items-center ">
        <ul className="w-60 xs:w-72 flex items-center justify-between ">
          <li
            className={
              pathname === "/" ? "text-secondary-500" : "text-primary-50"
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              pathname === "/about" ? "text-secondary-500" : "text-primary-50"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              pathname === "/graphql"
                ? "text-secondary-500 mr-2"
                : "text-primary-50 mr-2"
            }
          >
            <Link href="/graphql">graphql/redux</Link>
          </li>
        </ul>
        <ul className="ml-auto hidden sm:inline">
          <li
            className={
              pathname === "/contact" ? "text-secondary-500" : "text-primary-50"
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <ul className="fixed top-4 right-6 sm:right-10 sm:top-1/3">
        <div className="relative w-max">
          {cartList.length > 0 && (
            <span className="absolute -right-3 -top-1 text-secondary-500 flex items-center justify-center font-bold z-50 bg-primary-50 w-5 h-5 rounded-full text-base">
              {cartList.length}
            </span>
          )}
          <Image src={cartIcon} alt="cartIcon" />
        </div>
      </ul>
    </nav>
  );
}
