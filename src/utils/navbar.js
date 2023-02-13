import React from 'react';
import useId from "../hooks";

import SigninPage from '../pages/Signin';

const HomePage = React.lazy(() => import("../pages/Home"));
const Properties = React.lazy(() => import("../pages/Properties"));
const HouseItem = React.lazy(() => import("../pages/HouseItem"));
// import HomePage from "../pages/Home";
export const navbar = [
    {
        id: useId,
        element: <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>,
        <HomePage />
    </React.Suspense>,
        title: "Home",
        path: '/home',
        private: false, hidden: false
    },
    {
        id: useId,
        element: <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>,
        <HouseItem />
        </React.Suspense>,
        title: "Single House",
        path: '/properties/:id',
        private: false,
        hidden: true,
    },
    { id: useId, 
        element: <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <Properties />
        </React.Suspense>,
        title: "Properties", 
        path: '/properties', 
        private: false,
        hidden: false
    },
    {
        id: useId, 
        element: <SigninPage />, 
        title: "Sign In",
        path: '/signin', 
        private: false, 
        hidden: true
    },
    {
        id: useId, 
        element: <h1>Generec Sign Up</h1>, 
        title: "Sign up",
        path: '/signin', 
        private: false, 
        hidden: true
    },
];