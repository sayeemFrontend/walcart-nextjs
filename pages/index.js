import PostList from "../sections/home/PostList";

export default function Home({ posts }) {
  return (
    <div>
      <h5 className="mb-8 text-primary-300 ">We are starting here...</h5>
      <h4 className="mb-4 text-primary-500  ">Showing All of Articles here</h4>
      <div>
        <PostList list={posts} />
      </div>
    </div>
  );
}

export const getStaticProps = async (params) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
