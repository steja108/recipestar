import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import recipe_star_logo from '../images/recipe_star_logo.png';
import '../css/Home.css'
import '../css/tailwind.css';

const AboutUs = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate('/');
    };

  const navigateToSignUp = () => {
    navigate('/signup');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };
  const navigateToRecipes = () => {
    navigate('/recipes');
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const options = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
        <header className="header">
        <div className="container">
          <a onClick={navigateToHome}>
          <div className="logo">
            <img src={recipe_star_logo} alt="Recipe star" className="logo-img"/>
          </div>
          </a>
          <nav className="nav">
            <a href="/recipes" className="nav-link">Recipes</a>
            <a href="#" className="nav-link">About Us</a>
          </nav>
          <div className="header-buttons">
            <button onClick={navigateToLogin} className="button anim-button">Login</button>
            <button onClick={navigateToSignUp} className="button anim-button">Signup</button>
          </div>
        </div>
      </header>

      <section className="section" id="section4">
        <div className="content">
          <h1 className="title">About us</h1>
          <p className="subtitle">Welcome to RecipeStar
At RecipeStar, we are passionate about sharing our love for delicious, home-cooked meals. Our mission is to inspire and empower people of all cooking levels to explore new flavors, master essential techniques, and expand their culinary horizons.
Whether you're a beginner just starting out in the kitchen or an experienced home chef, you'll find a wealth of recipes, tips, and resources on our website to help you create mouthwatering dishes. Our team combines extensive culinary expertise, food science know-how, and a deep understanding of dietary needs and preferences. This allows us to develop recipes that are not only absolutely delicious, but also nutritious and customizable to your specific tastes.
Innovative Approach to Recipes
What sets RecipeStar apart is our unique approach to recipe curation and development. We utilize cutting-edge food intelligence and personalization algorithms to analyze recipes, ingredients, and user data. This enables us to provide highly tailored recipe recommendations based on your preferences, dietary restrictions, and cooking experience.
In addition to an expansive library of recipes, we also offer a wealth of educational resources, cooking tutorials, and food-related stories to inspire and entertain our readers. Our goal is to make cooking an enriching and enjoyable experience for everyone who visits our site.
Join Our Community
Whether you're here to find the perfect weeknight dinner, explore new cuisines, or level up your cooking skills, we're thrilled to have you as part of the RecipeStar community. We invite you to browse our recipe collection, engage with our content, and let us know how we can best support your culinary journey.
Happy cooking!
The RecipeStar Team </p>
          <button onClick={navigateToRecipes} className="button anim-button">Explore >></button>
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
                <p className="text-gray-500">© 2024 Recipe star. All rights reserved.</p>
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

export default AboutUs;