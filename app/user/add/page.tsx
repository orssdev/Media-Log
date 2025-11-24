'use client'

import { useState } from "react";

export default function AddUser() {
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameField,
                    email: emailField,
                    password: passwordField,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(data.error || 'Something went wrong');
            } else {
                setMessage('User added successfully!');
                setNameField('');
                setEmailField('');
                setPasswordField('');
            }
        } catch (err) {
            setMessage('Failed to connect to the server');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="page">
            <div className="flex justify-center pt-[100px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={nameField}
                        onChange={(e) => setNameField(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={emailField}
                        onChange={(e) => setEmailField(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={passwordField}
                        onChange={(e) => setPasswordField(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                    <button 
                        type="submit"
                        className="bg-(--color2) text-white p-2 rounded hover:bg-black"
                    >
                        Add User
                    </button>
                </form>
            </div>
        </section>
    );
}