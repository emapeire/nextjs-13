import Link from "next/link";
import { LikeButton } from "../../LikeButton";

const fetchComments = async (id) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <div className="p-4">
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
            <div className="flex justify-end my-10">
              <LikeButton id={comment.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
