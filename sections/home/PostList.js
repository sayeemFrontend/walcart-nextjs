import Link from "next/link";
import React from "react";
import PostCart from "../../components/common/carts/post-cart/PostCart";
import Display from "../../components/common/display/Display";
import { Center } from "../../styles/style";

export default function PostList({ list }) {
  return (
    <Center>
      <Display>
        {list?.map((item) => (
          <PostCart key={item.id} item={item} />
        ))}
      </Display>
    </Center>
  );
}
