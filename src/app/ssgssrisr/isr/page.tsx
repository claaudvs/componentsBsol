import { revalidateAction } from "./actions";

async function getData() {
  const res = await fetch('https://dummyjson.com/quotes/random', {
    next: {
      revalidate: 60,
      tags: ["getUser1"],
    },
  });
  console.log('entro---->');
  return res.json();
}
export default async function IsrPage() {
  const data = await getData();
  return (
   <main>
      <h1>🔁 ISR – Incremental Static Regeneration</h1>
      <p>Última generación: {new Date().toLocaleTimeString()}</p>
      <form action={revalidateAction}>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          🔄 Refrescar con revalidateTag()
        </button>
      </form>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
