import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from '../pages/RootLayout';
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";


const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <h1 className="text-red-500 text-center my-20 text-4xl">404 Page Not Found</h1>,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "products",
                    element: <Products />
                },
                {
                    path: "products/:productId",
                    element: <ProductDetails />
                },

            ]
        }
    ]);

    return <RouterProvider router={router} />;
};
export default AppRouter;