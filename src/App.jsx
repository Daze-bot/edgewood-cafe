import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import './styles/app.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]);

  return (
    <div className='app'>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
};

export default App
