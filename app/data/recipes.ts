export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  time: string;
  difficulty: string;
  emoji: string;
  description: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    time: "35 min",
    difficulty: "Medium",
    emoji: "🍕",
    description: "Blistered crust, melty mozzarella, fresh basil.",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "125g fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil and salt",
    ],
    steps: [
      "Heat the oven as hot as it goes.",
      "Stretch the dough into a round base and spread tomato sauce.",
      "Tear mozzarella over the top.",
      "Bake 7 to 9 minutes until charred.",
      "Finish with fresh basil and a pinch of salt.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    cuisine: "Indian",
    time: "40 min",
    difficulty: "Medium",
    emoji: "🧆",
    description: "Smoky spiced paneer cubes charred with peppers and onions.",
    ingredients: [
      "250g paneer, cubed",
      "1/2 cup thick yogurt",
      "1 tbsp ginger-garlic paste",
      "1 tsp garam masala & red chili powder",
      "1 bell pepper and 1 onion, diced",
    ],
    steps: [
      "Whisk yogurt with ginger-garlic paste, spices, and salt.",
      "Coat paneer, peppers, and onions in the marinade for 20 minutes.",
      "Thread onto skewers.",
      "Grill or broil on high heat until charred at the edges.",
    ],
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    cuisine: "Drinks",
    time: "12 hrs",
    difficulty: "Easy",
    emoji: "☕",
    description: "Smooth, low-acid coffee steeped overnight.",
    ingredients: [
      "1 cup coarsely ground coffee beans",
      "4 cups cold filtered water",
      "Ice cubes",
    ],
    steps: [
      "Combine coarse coffee grounds and cold water in a jar.",
      "Stir gently, cover, and steep in the fridge for 12 to 16 hours.",
      "Strain through a fine mesh sieve or coffee filter.",
      "Serve over ice with water or milk to taste.",
    ],
  },
  // Add ingredients and steps to any remaining recipes you created in Part 1
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}