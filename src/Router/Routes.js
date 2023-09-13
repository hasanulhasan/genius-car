import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main'
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Signup from "../Pages/Signup/Signup";
import PaymentSuccess from "../Pages/CheckOut/PaymentSuccess";
import BkashError from "../Pages/CheckOut/BkashError";
import BkashSuccess from "../Pages/CheckOut/BkashSuccess";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: 'orders',
        element: <Orders></Orders>
      },
      {
        path: 'error',
        element: <BkashError></BkashError>
      },
      {
        path: 'success',
        element: <BkashSuccess></BkashSuccess>
      },
      {
        path: 'checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`https://genius-car-server-pi-one.vercel.app/services/${params.id}`)
      },
      {
        path: 'payment/success',
        element: <PaymentSuccess></PaymentSuccess>
      }
    ]
  }

]);

export default router;