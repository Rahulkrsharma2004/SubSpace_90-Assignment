import { useState } from 'react';
import { useSignInEmailPassword } from '@nhost/react';
import nhost from './nhost';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInEmailPassword } = useSignInEmailPassword(nhost);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await signInEmailPassword(email, password);
    if (error) {
      alert('Login failed!');
    } else {
      alert('Login successful!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
        <input required type="email" placeholder="Email" className="border p-2" onChange={(e) => setEmail(e.target.value)} />
        <input required type="password" placeholder="Password" className="border p-2" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
