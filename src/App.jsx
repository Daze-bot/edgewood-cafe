import Home from './components/Home';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import './styles/app.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';

const App = () => {
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
          element: <Home />,
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
