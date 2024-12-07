import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaApple } from 'react-icons/fa'; // Consolidated icon imports
import GoogleLoginButton from '../components/GoogleLoginButton';
import '../css/SignUp.css'; // Ensure the CSS path is correct
import recipe_star_logo from '../images/recipe_star_logo.png';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = formData;

    try {
      const response = await axios.post('http://localhost:5001/api/users/register', { name, email, password });
      setSuccess(response.data.message);
      setError('');
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred');
      setSuccess('');
    }
  };

  return (
    <div className="signup-container">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="logo">
          <a onClick={() => navigate('/')}>
            <img
              src={recipe_star_logo}
              alt="Recipe Star Logo"
              className="logo-img1"
            />
          </a>
        </div>
        <h2 className="signup-heading">Sign up to Recipe Star</h2>
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Email address"
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Password"
            />
            <span className="password-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" className="signup-button">
            Sign up
          </button>
        </form>
        <p className="signin-text">
          Don't Have an account?{' '}
          <a onClick={navigateToSignUp} className="signin-link">
            Sign Up
          </a>
        </p>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        {/* Add content here if needed */}
      </div>
    </div>
  );
};

export default Login;
