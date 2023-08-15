import Link from "next/link";
import { LikeButton } from "../LikeButton";
import { SeeCommets } from "./SeeComments";

const fetchSinglePost = async (id) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
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

export default async function SinglePost({ params, children }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <div className="p-4">
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
      <div className="flex my-10 justify-between items-start">
        <h3>
          <SeeCommets id={id} />
        </h3>
        <LikeButton id={post.id} />
      </div>
      {children}
      <div className="flex my-10 items-start">
        <h3>
          <Link href="/posts">
            ⬅ Back to <span className="text-[#09f]">posts</span>
          </Link>
        </h3>
      </div>
    </div>
  );
}
