// optimization.js

// Create a script element
const schema = document.createElement("script");
schema.type = "application/ld+json";

// Your Recipe JSON-LD as a string
schema.text = JSON.stringify({
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Pakistani Grilled Chicken",
  "author": {
    "@type": "Person",
    "name": "Sidra"
  },
  "url": "https://github.com/sidra-shoukat/SEO",
  "datePublished": "2025-09-22",
  "description": "Juicy and smoky Pakistani-style grilled chicken marinated with spices and herbs.",
  "prepTime": "PT15M",
  "cookTime": "PT20M",
  "totalTime": "PT35M",
  "keywords": "grilled chicken, Pakistani grilled chicken, healthy chicken recipe",
  "recipeYield": "1 serving",
  "recipeCategory": "Main course",
  "recipeCuisine": "Pakistani",
  "image": "https://images.unsplash.com/photo-1604908177073-9d74e9a6a030",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "250 calories",
    "proteinContent": "28 g",
    "fatContent": "12 g",
    "carbohydrateContent": "2 g"
  },
  "recipeIngredient": [
    "1 chicken breast (boneless)",
    "2 tbsp olive oil",
    "1 tsp garlic paste",
    "1 tbsp lemon juice",
    "1/2 tsp red chili flakes",
    "Salt and black pepper to taste",
    "Fresh coriander for garnish"
  ],
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "name": "Marinate the chicken",
      "text": "Mix olive oil, garlic paste, lemon juice, chili flakes, salt, and pepper. Coat chicken and marinate for 2 hours."
    },
    {
      "@type": "HowToStep",
      "name": "Preheat the grill",
      "text": "Preheat grill or pan on medium flame."
    },
    {
      "@type": "HowToStep",
      "name": "Grill the chicken",
      "text": "Cook chicken on both sides until golden brown and juicy (6–7 minutes per side)."
    },
    {
      "@type": "HowToStep",
      "name": "Serve",
      "text": "Garnish with coriander and serve hot."
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "87"
  }
});

// Append schema into <head>
document.head.appendChild(schema);

