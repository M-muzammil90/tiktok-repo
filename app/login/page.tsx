"use client"
import { signIn } from 'next-auth/react';
import React from 'react'
import { useRouter } from 'next/navigation';

function page() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        })
        if(result?.error) {
            console.log(result.error);
        }else{
            router.push('/');
        }
    }
   
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default page