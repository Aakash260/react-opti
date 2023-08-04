 

import React ,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
// import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import {Provider} from"react-redux"
import Cart from "./Components/Cart";
import store from "./Utils/store"
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

 
const About=lazy(() => import('./Components/About'));
const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <Suspense>
          <About />
        </Suspense>,
        // children: [{ // nested routing
        //   path: "profile",
        //   element: <Profile />,
        // }]
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter
