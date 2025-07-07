async function fetchPosts() {
  await new Promise((res) => setTimeout(res, 2000)); // Simula retraso
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Posts() {
  const posts = await fetchPosts();

  return (
    <div className="bg-green-100 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Posts</h2>
      <ul className="list-disc list-inside">
        {posts.slice(0, 3).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}