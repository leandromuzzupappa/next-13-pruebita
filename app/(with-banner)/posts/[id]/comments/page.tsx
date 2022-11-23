import Link from "next/link";

const fetchComments = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error("Error");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const post = await res.json();
  return post;
};

export default async function Post({ params }: { params: any }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ fontSize: "14px", background: "#222", padding: "1rem" }}>
      {comments.map((comment: any) => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
          <small>{comment.email}</small>
        </li>
      ))}
    </ul>
  );
}
