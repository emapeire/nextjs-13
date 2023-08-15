import { Suspense } from "react";
import { ListOfPosts } from "./ListOfPosts";

export default function PostsPage() {
  return (
    <section>
      <Suspense
        fallback={
          <div className="p-4 mb-32">
            <h3 className="text-[#09f] flex justify-center">Loading...</h3>
          </div>
        }
      >
        <ListOfPosts />
      </Suspense>
    </section>
  );
}
