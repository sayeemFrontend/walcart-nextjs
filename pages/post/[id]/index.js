import { useRouter } from "next/router";
import React from "react";
import GoBack from "../../../components/common/go-back/GoBack";
import CommentList from "../../../sections/post-details/CommentList";
import { Center } from "../../../styles/style";

export default function PostDetails({ post }) {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <div>
      <h2 className="text-center mb-6 text-primary-200">
        This is the details page of
        <span className="text-secondary-500 text-3xl"> {post?.id}</span> Item
      </h2>
      <h4 className="mb-4  text-secondary-200 text-center">Post Details</h4>
      <div className="text-center mb-8 p-4 outline-2 outline-offset-1 outline-dashed">
        <h5 className="text-secondary-300">{post.title}</h5>
        <p className="max-w-2xl mx-auto text-base text-primary-300">
          {post.body}
        </p>
      </div>
      <h4 className="mb-4  text-secondary-200 text-center">All Comments</h4>

      <div className="mb-4">
        <CommentList postId={post.id} />
      </div>
      <Center>
        <GoBack />
      </Center>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};
