import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Feedback from "../pages/Feedback/Feedback";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/home", element: <Home></Home> },
            { path: 'contact', element: <Contact></Contact> },
            { path: "/about", element: <About></About> },
            {path:"/feedback", element:<Feedback></Feedback>}
        ]
    },
    {
        path: "*",
        element:<h1>Not Found 404 !!!</h1>
    }
])


export default router;