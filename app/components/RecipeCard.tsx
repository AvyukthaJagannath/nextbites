import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="card">
      <div className="emoji">{recipe.emoji}</div>
      <h2>{recipe.title}</h2>
      <p>
        {recipe.cuisine} · {recipe.time}
      </p>
    </Link>
  );
}