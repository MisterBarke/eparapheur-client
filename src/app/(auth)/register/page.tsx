'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/asset/images/logo.png';
import { usePathname } from 'next/navigation';
import style from './register.module.css'
const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const currentPath = usePathname();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        if (password.length < 6) {
            alert('Le mot de passe doit comporter au moins 6 caractères');
            return;
        }
        // Perform registration logic here
        console.log('Register:', { email, password });
    };

    return (
        <div className="min-h-screen md:flex w-full">
            
            <div className={`${style.contentPage}  flex flex-col justify-center items-center w-full md:w-1/2`}>

                <h2 className="text-3xl font-semibold z-40 text-white mb-6 text-center p-6 ">
                    Vous avez déjà un compte ? <br /> Cliquez sur  <span className="font-bold text-green-600">Connexion</span> pour accéder à votre espace personnel et gérer vos informations.
                </h2>

             <div className='flex gap-5 my-5 z-40'>
    <div
        className={`${
            currentPath === '/register'
                ? 'border-b-8 border-orange-600'
                : 'border-b-8 border-orange-100'
        } flex-grow text-transparent pb-2`}
    >
        {/* Placeholder text to ensure border visibility */}
        <span className="block w-full h-0">Inscription</span>
    </div>
    <div
        className={`${
            currentPath === '/login'
                ? 'border-b-8 border-orange-600'
                : 'border-b-8 border-orange-200'
        } flex-grow text-transparent pb-2`}
    >
        {/* Placeholder text to ensure border visibility */}
        <span className="block w-full h-0">Connexion</span>
    </div>
</div>

            </div>
            <div className='flex flex-col justify-center items-center bg-gray-100 p-4 w-full md:w-1/2'>
                <div className="h-20 w-20 lg:h-36 lg:w-36 object-contain mx-auto flex flex-col  items-center mb-2">
                    <Image src={logo} alt="Logo" width={120} height={120} priority />
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center mb-4 space-x-4">
                    <Link
                        href="/register"
                        className={`${currentPath === '/register'
                                ? 'text-green-600 border-b-4 border-orange-600 font-bold'
                                : 'text-green-600 border-b-4 border-orange-200'
                            }`}
                    >
                        Inscription
                    </Link>
                    <Link
                        href="/login"
                        className={`${currentPath === '/login'
                                ? 'text-green-600 border-b-4 border-orange-600 font-bold'
                                : 'text-green-600 border-b-4 border-orange-200'
                            }`}
                    >
                        Connexion
                    </Link>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-6 text-gray-700">
                    Créer mon compte
                </h2>

                {/* Form */}
                <form onSubmit={handleRegister} className="w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 mt-1 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">
                            Mot de passe (6 caractères au minimum)
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 mt-1 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700">
                            Confirmez le mot de passe
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full p-2 mt-1 border border-gray-300 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
                    >
                        Inscription
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
