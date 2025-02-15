import Home from './components/Home';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import './styles/app.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import { useState, useEffect } from 'react';

const App = () => {
  const [currentAlert, setCurrentAlert] = useState("");

  // Need to move the server to a new host
  /* useEffect(() => {
    fetchMessage();
  },[]);

  const fetchMessage = () => {
    fetch('https://daze-api.adaptable.app/edgewood/alerts/recent')
      .then((res) => {
        return res.json();
      })
      .then((data) => setCurrentAlert(data.data.text));
  }; */

  const NavWrapper = () => {
    return (
      <div className='app'>
        <Nav />
        <Outlet />
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavWrapper />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home 
            currentAlert={currentAlert}
          />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    }
  ]);  

  return (
    <RouterProvider router={router} />
  )
};

export default App;
