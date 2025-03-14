import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "@/layouts/MainLayout"
import Home from "@/pages/Home"
import Pricing from "@/pages/Pricing"
import Company from "@/pages/Company"
import Blog from "@/pages/Blog"
import Terms from "@/pages/Terms"
import Policy from "@/pages/Policy"
import Legal from "@/pages/Legal"
import { ThemeProvider } from "@/contexts/ThemeProvider"
import Profile from "@/pages/Profile"
import SkillsList from "@/pages/Skills"
import Projects from "@/pages/Projects"
import Contacts from "@/pages/Contacts"


const router = createBrowserRouter([
    {
        path: "/",
        // Main Layout
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/company",
                element: <Company />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/terms",
                element: <Terms />
            },
            {
                path: "/privacy",
                element: <Policy />
            },
            {
                path: "/legal",
                element: <Legal />
            },
            {
                path: "/profile",
                element : <Profile />
            },
            {
                path: "/skills",
                element : <SkillsList />
            },
            {
                path: "/projects",
                element : <Projects />
            },
            {
                path: "/contacts",
                element : <Contacts />
            }
        ]
    }

])

export function AppRouter() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}