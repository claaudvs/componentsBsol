import { Suspense } from "react";
import Posts from "./components/Posts";
import Users from "./components/User";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-10 space-y-8">
      <h1 className="text-2xl font-bold text-center">📦 Paralelización con Suspense</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Suspense fallback={<p className="text-blue-600">Cargando usuarios...</p>}>
          {/* Server Component async */}
          <Users />
        </Suspense>

        <Suspense fallback={<p className="text-green-600">Cargando posts...</p>}>
          {/* Server Component async */}
          <Posts />
        </Suspense>
      </div>
    </main>
  );
}