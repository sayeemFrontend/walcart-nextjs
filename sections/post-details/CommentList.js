import React, { useEffect, useState } from "react";
import PostCart from "../../components/common/carts/post-cart/PostCart";
import Display from "../../components/common/display/Display";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const comments = await res.json();
      setComments(comments);
    };
    getComments();
  }, [postId]);

  return (
    <div>
      <Display>
        {comments?.map((item) => (
          <div
            key={item.id}
            className="p-2 max-w-3xl shadow-sm shadow-primary-300"
          >
            <h5 className="text-secondary-300">
              <span className="text-primary-50">Name: </span>
              {item.name}
            </h5>
            <p className="text-base">{item.body}</p>
          </div>
        ))}
      </Display>
    </div>
  );
}
