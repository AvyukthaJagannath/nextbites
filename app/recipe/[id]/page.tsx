import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "@/app/data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <Link
        href="/"
        className="inline-block text-sm text-stone-600 hover:text-stone-900"
      >
        ← Back to all recipes
      </Link>

      <div className="space-y-2">
        <div className="text-4xl">{recipe.emoji}</div>
        <h1 className="text-3xl font-bold">{recipe.title}</h1>
        <p className="text-stone-600">
          {recipe.cuisine} · {recipe.minutes} mins · {recipe.difficulty}
        </p>
        <p className="text-stone-700 pt-2">{recipe.blurb}</p>
      </div>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Steps</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}