export const dynamic = "force-dynamic";
async function getData() {
  const res = await fetch('https://dummyjson.com/quotes/random',{
    cache: 'no-store'
  });
  
  return res.json();

}
export default async function SsrPage() {
  const data = await getData();

 return (
    <main>
      <h1>⚡ SSR – Server Side Rendering</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
