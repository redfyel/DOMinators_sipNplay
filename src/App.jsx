import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import * as THREE from "three";

import RootLayout from './RootLayout';
import Home from './components/home/Home';
import About from './components/about/About'
import Events from './components/events/Events'
import Menu from './components/menu/Menu'
import Register from './components/register/Register';
import './App.css'


function App() {
    
    const browserRouter = createBrowserRouter([
      {
        path : '',
        element : <RootLayout />,
        children : [
          {
            path : '',
            element : <Home/> 
          },
          {
            path : '/about',
            element : <About />
          },
          {
            path : '/home',
            element : <Home />
          },
          {
            path : '/events',
            element : <Events />
          },
          {
            path : '/menu',
            element : <Menu />
          },
          {
            path : '/register',
            element : <Register />
          },
        ]
      }
    ]);

  return ( <RouterProvider router={browserRouter}></RouterProvider> )
}

export default App;
