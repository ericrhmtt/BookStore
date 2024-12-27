import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../style/AuthStyles.css';  

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:2026/api/user/register', {
        username,
        email,
        password
      });

      if (response.status === 201 || response.status === 200) {
        Swal.fire({
          title: 'Success',
          text: 'Registration successful!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/login');
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Registration failed!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'There was an error registering the user!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error('There was an error registering the user!', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleRegister}>Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
