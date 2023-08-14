const fetchPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
    <article key={posts.id}>
      <h2>{posts.title}</h2>
      <p>{posts.body}</p>
    </article>
  ));
}
