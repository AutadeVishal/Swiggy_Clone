import { createRoot } from 'react-dom/client';
import React,{lazy,Suspense} from "react";
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Cart from './components/Cart';
//import RestaurantMenu from './components/RestaurantMenu'; // want to load using lazy for code splitting
//code splitting mean to load only when needed else browser downlaods all in one js file

//import Grocery from './components/Grocery';
const AppLayout = () => (
  <Provider store={appStore}><div className="app"> {/*now use selector and use dispatch can be used to view or update the store*/ }
    <Header />
    <Outlet />
  </div>
  </Provider>
);
const Grocery=lazy(()=>import('./components/Grocery'))
//This lazy function made react to split the bundle js files separate for 
// grocery component which helps in reducing size of single js file at production
//so client gets to see only few components needed 
//but when new component is askedfrom lazy then only network call is called for that components to download that file


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
      {path:"grocery",element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>},
      {path:"cart",element:<Cart/>,},
      //falback was shimmer to show till network call happen
      //suspence is used so that react dont throw error that it didn't find Grocery componet
      //suspence shows fallback till network donwlaods that componets
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
