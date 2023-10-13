import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import MainLayout from '../layout/MainLayout';

/**
 * this is for crate route for application, here i have taken MainLayout component for keep all page consistance for entire app
 *  **/
const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    },

]);

export default router;