import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css'; 
import '../css/tailwind.css';
import recipe_star_logo from '../images/recipe_star_logo.png';

const Home = () => {
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
          <div className="logo">
            <img src={recipe_star_logo} alt="Recipe star" className="logo-img"/>
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

      <section className="section" id="section1">
        <div className="content">
          <h1 className="title">Discover New Recipes</h1>
          <p className="subtitle">Get inspired and connect with other home cooks like you.</p>
          <button onClick = {navigateToRecipes}className="button anim-button">Explore >></button>
        </div>
      </section>

      <section className="section" id="section2">
        <div className="content">
          <h1 className="title">Connect with the cooking community </h1>
          <p className="subtitle">Find new recipes to try and share your favorites.</p>
          <button onClick={navigateToLogin} className="button anim-button">Login</button>
        </div>
      </section>

      <section className="section" id="section3">
        <div className="content">
          <h1 className="title">Join Our Community</h1>
          <p className="subtitle">Share your culinary creations and get feedback from others.</p>
          <button onClick={navigateToSignUp} className="button anim-button">Sign Up</button>
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

export default Home;
