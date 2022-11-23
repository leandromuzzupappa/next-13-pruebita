import Link from "next/link";

const fetchSinglePost = async (id: string) => {
  console.log(":dog:", `https://jsonplaceholder.typicode.com/posts/${id}`);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const post = await res.json();
  return post;
};

export default async function layout({
  children,
  params,
}: {
  children: any;
  params: any;
}) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  console.log(id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}> Ver comentarios </Link>
      {children}
    </article>
  );
}
