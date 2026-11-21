// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-8 text-center space-y-4">
      <h1 className="text-2xl font-bold">Recipe Not Found</h1>
      <p>Sorry, we could not find the recipe you were looking for.</p>
      <Link href="/" className="underline font-medium">
        ← Back to all recipes
      </Link>
    </main>
  );
}