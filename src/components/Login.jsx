import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../style/AuthStyles.css';  

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:2026/api/user/login', {
        email,
        password
      });

      if (response.data.success) {
        Swal.fire({
          title: 'Success',
          text: 'Login successful!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          setIsAuthenticated(true);
          navigate('/home');
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Login failed. Please check your email and password.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'There was an error logging in!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
