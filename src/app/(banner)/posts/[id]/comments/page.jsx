import Image from "next/image";
import { LikeButton } from "../../LikeButton";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
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
            <div className="flex gap-8 items-start">
              <Image
                width={100}
                height={100}
                alt={comment.name}
                src={`https://api.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
              />
              <div>
                <div className="text-[#09f]">
                  <h3>{comment.name}</h3>
                </div>
                <p>{comment.body}</p>
                <div className="flex justify-end my-10">
                  <LikeButton id={comment.id} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
