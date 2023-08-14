export default function Posts({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>This is the post number {id}</h1>
    </div>
  );
}
