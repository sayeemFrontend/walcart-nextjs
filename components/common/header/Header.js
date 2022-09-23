import React from "react";
import { Center } from "../../../styles/style";

export default function Header() {
  return (
    <Center height="150px">
      <div className="text-center">
        <h1 className="text-4xl text-primary-50">
          Welcome <span className="text-secondary-600">Next.js</span>
        </h1>
        <p className="my-3">This is the subtitle, if you want can tell more</p>
        <h2 className="text-primary-300">Let us Start ...</h2>
      </div>
    </Center>
  );
}
