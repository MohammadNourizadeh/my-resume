import { JSX } from "react";
import { Navigate } from "react-router-dom";
import Admin from "./layOutes/admin/Admin";
import ContactPage from "./pages/contactPage/ContactPage";
import HomePage from "./pages/homePage/HomePage";

type ChildrenType = {
    path: string,
    element: JSX.Element,
}

type RoutesType = {
    path: string,
    element: JSX.Element,
    children?: ChildrenType[]
}

const routes: RoutesType[] = [
    {
        path: '/',
        element: <Navigate to={'/admin/home'} />
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: '/admin/home',
                element: <HomePage />
            },
            {
                path: '/admin/contact',
                element: <ContactPage />
            },
        ]
    },
]

export { routes };

