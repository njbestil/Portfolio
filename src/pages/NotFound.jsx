import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';

export default function NotFound() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <FiAlertTriangle className="text-6xl text-red-500 mb-4 mx-auto" />
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">404 Not Found</h1>
                    <p className="text-lg text-gray-600 mb-4">The page you're looking for does not exist.</p>
                    <Link to="/" className="text-blue-500 underline underline-offset-4">Go back to the home page</Link>
                </div>
            </div>
        </>
    );
}