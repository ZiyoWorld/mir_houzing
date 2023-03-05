import React from "react";
import useId from "../hooks";

import Favorite from "../pages/Favorite";
import Signin from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import AddNewHousePage from "../pages/AddNewHouse";

const HomePage = React.lazy(() => import("../pages/Home"));
const Properties = React.lazy(() => import("../pages/Properties"));
const HouseItem = React.lazy(() => import("../pages/HouseItem"));
// import HomePage from "../pages/Home";
export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        ,
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        ,
        <HouseItem />
      </React.Suspense>
    ),
    title: "Single House",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Properties />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Favorite />,
    title: "Favorite",
    path: "/favorite",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <MyProfile />,
    title: "My Profile",
    path: "/my-profile",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <Signin />,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHousePage />,
    title: "Add New House",
    path: "/my-profile/new-house",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHousePage />,
    title: "Add New House",
    path: "/my-profile/edit-house/:id",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <Signin />,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
