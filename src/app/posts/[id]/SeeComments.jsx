"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SeeCommets({ id }) {
  const router = useRouter();
  const [comments, setComments] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setComments(!comments);
    if (comments) {
      router.push(`/posts/${id}`);
    } else {
      router.push(`/posts/${id}/comments`);
    }
  };

  return (
    <Link href="#" onClick={handleClick}>
      {comments ? "Hide" : "See"} <span className="text-[#09f]">comments</span>{" "}
      👀
    </Link>
  );
}
