import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPost = async () => {
  console.log("Fetching posts...");
  console.log(":cat:");

  // getStaticProps
  // --> const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // getServerSideProps
  // --> const res = await fetch("http://localhost:3000/api/posts", {cache: "no-store"});

  // incremental static regeneration
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  const posts = await res.json();
  return posts;
};

export default async function ListOfPosts() {
  const posts = await fetchPost();

  return posts.slice(0, 2).map((post: any) => (
    <article key={post.id}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h2 style={{ color: "#09f" }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton />
      </Link>
    </article>
  ));
}
