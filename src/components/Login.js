import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons for password visibility
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import GoogleLoginButton from '../components/GoogleLoginButton';
import "../css/SignUp.css"; // Ensure the CSS path is correct
import recipe_star_logo from '../images/recipe_star_logo.png';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      success: '',
      showPassword: false,
    };
  }

  navigate = useNavigate();

  navigateToSignUp = () => {
    navigate('/signup');
  };

  navigateToLogin = () => {
    navigate('/login');
  };

  navigateToRecipes = () => {
    navigate('/recipes');
  };

  navigateToAboutus = () => {
    navigate('/aboutus');
  };

  navigateToHome = () => {
    navigate('/');
  };
  // Handle input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Handle password visibility toggle
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  // Handle form submission
  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;

    try {
      const response = await axios.post('http://localhost:5001/api/users/register', { name, email, password });
      this.setState({ success: response.data.message, error: '' });
      // Redirect to login page or another page
    } catch (error) {
      this.setState({
        error: error.response ? error.response.data.message : 'An error occurred',
        success: '',
      });
    }
  };

  render() {
    const { name, email, password, error, success, showPassword } = this.state;

    return (
      <div className="signup-container">
        {/* Left Panel */}
        <div className="left-panel">
          <div className="logo">
            <a onClick={this.navigateToHome}>
            <img
              src={recipe_star_logo}
              alt="InsideBox Logo"
              className="logo-img1"
            />
            </a>
          </div>
          <h2 className="signup-heading">Login to Recipe Star</h2>
          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}
          <form onSubmit={this.handleSubmit} className="signup-form">
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              className="input-field"
              placeholder="Email address"
            />
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={this.handleInputChange}
                className="input-field"
                placeholder="Password"
              />
              <span className="password-icon" onClick={this.togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit" className="signup-button">
              Login
            </button>
          </form>
          <p className="signin-text">
            Don't have an account? <a onClick={this.navigateToSignUp} className="signin-link">Sign Up</a>
          </p>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
        </div>
      </div>
    );
  }
}

export default Signup;
