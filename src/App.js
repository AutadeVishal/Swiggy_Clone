import { createRoot } from 'react-dom/client';
import React,{lazy,Suspense} from "react";
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
//import RestaurantMenu from './components/RestaurantMenu'; // want to load using lazy for code splitting
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
//import Grocery from './components/Grocery';
const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);
const Grocery=lazy(()=>import('./components/Grocery'))
//This lazy function made react to spli the bundle js files separate for 
// grocery component which helps in reducing size of single js file at production
//so client gets to see only few components needed 
//but when new component is askedfrom lazy then only network call is called for that components


const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "restaurants/:resId", element:<Suspense fallback={<h1>Loading</h1>}> <RestaurantMenu /></Suspense> },
      {path: "contactus" ,element:<Contact/>},
      {path:"grocery",element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>}
      //falback was shimmer to show till network call happen
      //suspence is used so that react dont throw error that it didn't find Grocery componet
      //suspence shows fallback till network donwlaods that componets
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
