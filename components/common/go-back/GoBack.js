import { useRouter } from "next/router";
import React from "react";
import { Center } from "../../../styles/style";

export default function GoBack() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="w-40 h-10 border cursor-pointer text-primary-50 border-secondary-200 hover:bg-secondary-300 hover:text-primary-800"
    >
      <Center>Go back</Center>
    </div>
  );
}
