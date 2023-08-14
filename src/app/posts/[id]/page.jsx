import Link from "next/link";

export default function Posts({ params }) {
  const { id } = params;

  return (
    <div className="m-8">
      <h1>This is the post number {id}</h1>
      <h3>
        Back to{" "}
        <Link href="/posts" className="text-[#09f]">
          posts
        </Link>
      </h3>
    </div>
  );
}
