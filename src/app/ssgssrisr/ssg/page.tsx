export const dynamic = "force-static";
async function getData() {
  const res = await fetch('https://dummyjson.com/quotes/random');
  return res.json();
}
export default async function SsgPage() {
  const data = await getData();

  return (
    <main>
      <h1>📦 SSG – Static Site Generation</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
