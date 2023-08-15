import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: {
        revalidate: 60,
      },
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((posts) => (
    <div key={posts} className="p-4">
      <article key={posts.id}>
        <Link href={`/posts/${posts.id}`}>
          <h2>{posts.title}</h2>
        </Link>
        <p>{posts.body}</p>
        <div className="flex justify-end mt-10">
          <LikeButton id={posts.id} />
        </div>
      </article>
    </div>
  ));
}
