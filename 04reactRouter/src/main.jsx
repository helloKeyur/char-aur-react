import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import GitHub from './components/GitHub/GitHub';
import Home from './components/Home/Home';
import User from './components/User/User';
import './index.css'
import Layout from './Layout';
import { GitHubUserInfoLoader } from './loader/GitHubUserInfoLoader';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about-us",
        element: <About />
      },
      {
        path: "contact-us",
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      }, 
      {
        path: "github",
        loader:GitHubUserInfoLoader,
        element: <GitHub/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
