import React from "react";
import { useNavigate } from 'react-router-dom';
import recipe_star_logo from '../images/recipe_star_logo.png';
import '../css/Recipes.css'; 



const recipes = [
  {
    id: 1,
    image: "https://www.allrecipes.com/thmb/IjwIoPhuA-NKnLP4bYg6tRnBU1g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-236432-brown-sugar-ham-steak-ddmfs-4x3-hero-bcfc91ba56d14ae49142a2bd297c757e.jpg",
    category: "BROWN SUGAR",
    title: "Brown Sugar Ham Steak",
    rating: 4.5,
    ratingsCount: 186,
  },
  {
    id: 2,
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FSeries%2F2020-04-snapshot-cooking-5-recipes-to-make-with-2-cups-of-rice%2Fthekitchn-pork-fried-rice-beauty",
    category: "FRIED RICE RECIPES",
    title: "Pork Fried Rice",
    rating: 4.3,
    ratingsCount: 340,
  },
  {
    id: 3,
    image: "https://www.allrecipes.com/thmb/hdXpQROhGqUmvjozZPWDrGcGLZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-276006-air-fryer-lobster-tails-with-lemon-garlic-butter-DDMFS-beauty-2x1-fc800a7cd7de49d6a0d015f959960bb2.jpg",
    category: "LOBSTER",
    title: "Air Fryer Lobster Tails with Lemon-Garlic Butter",
    rating: 4.8,
    ratingsCount: 50,
  },
  {
    id: 4,
    image: "https://www.laurafuentes.com/wp-content/uploads/2024/01/Milk-free-french-toast_SQ.jpg",
    category: "FRENCH TOAST RECIPES",
    title: "French Toast without Milk",
    rating: 5.0,
    ratingsCount: 20,
  },
  {
    id: 5,
    image: "https://cdn.jwplayer.com/v2/media/C8ymBZU3/poster.jpg?width=720",
    category: "CHICKEN BREAST",
    title: "Simple Chicken Mayo with Parmesan and Bread Crumbs",
    rating: 4.2,
    ratingsCount: 106,
  },
  {
    id: 6,
    image: "https://whatscookingamerica.net/wp-content/uploads/2015/07/FreshTrout-Cooked2.jpg",
    category: "FISH",
    title: "How to Cook Trout",
    rating: 4.7,
    ratingsCount: 139,
  },
  {
    id: 7,
    image: "https://www.allrecipes.com/thmb/B8LABI3tZsd91f1lwxvlS6w6HMo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/image-321-1acc9ef3a3cf44dc93bea4921c0d517a.jpg",
    category: "MEXICAN",
    title: "Easy Chorizo Street Tacos",
    rating: 4.6,
    ratingsCount: 46,
  },
  {
    id: 8,
    image: "https://tastefulventure.com/wp-content/uploads/2015/10/Baked-Rosemary-Salmon-in-Foil-3.jpg",
    category: "BAKED SALMON RECIPES",
    title: "Lemon Rosemary Salmon",
    rating: 4.9,
    ratingsCount: 459,
  },
];

const RecipeCard = ({ recipe }) => {
  return (
    
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase font-semibold">
          {recipe.category}
        </p>
        <h3 className="text-lg font-bold mt-1">{recipe.title}</h3>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  i < Math.floor(recipe.rating) ? "" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {recipe.ratingsCount} Ratings
          </span>
        </div>
      </div>
      <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.978 6.978 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>
    </div>
  );
};

const Recipes = () => {
    const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate('/signup');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToRecipes = () => {
    navigate('/recipes');
  };

  return (
    <div>
    <header className="header">
        <div className="container">
          <div className="logo">
            <a href="/">
            <img src={recipe_star_logo} alt="Recipe star" className="logo-img"/>
            </a>
          </div>
          <nav className="nav">
            <a href="/recipes" className="nav-link">Recipes</a>
            <a href="/aboutUs" className="nav-link">About Us</a>
          </nav>
          <div className="header-buttons">
            <button onClick={navigateToLogin} className="button anim-button">Login</button>
            <button onClick={navigateToSignUp} className="button anim-button">Signup</button>
          </div>
        </div>
    </header>
    <section className="grid1">
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
    </section>

    <footer className="footer">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center md:text-left border-t pt-10">
            <div className="pl-8 border-r">
              <h3 className="text-lg font-bold mb-4">Samsung Food</h3>
              <ul className="space-y-3">
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Chrome Extension</li>
              </ul>
            </div>
            <div className="pl-8 border-r">
              <h3 className="text-lg font-bold mb-4">Features</h3>
              <ul className="space-y-3">
                <li>Recipe Box</li>
                <li>Shopping</li>
                <li>Meal Planner</li>
                <li>Communities</li>
              </ul>
            </div>
            <div className="pl-8">
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>Nutrition Calculator</li>
                <li>Recipe Converter</li>
                <li>Support</li>
                <li>Blog</li>
                <li>Open Food Facts</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-sm text-center md:text-left">
            <div className="flex flex-col md:flex-row md:justify-between mt-4 md:mt-0">
              <div className="flex space-x-4 justify-center md:justify-start">
                <p className="text-gray-500">© 2024 Recipe Star. All rights reserved.</p>
                <a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Terms</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Security</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Do not sell my data</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Recipes;