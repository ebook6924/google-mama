 import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Carosel from "../components/Carosel";
import Book from "../components/Book";
import BookInfo from "../components/BookInfo";
import Oder from "../components/Order";
import Error from "../components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
      path:'',
      element:<Home></Home>
    },
    {
      path:"menu",
      element:<Carosel></Carosel>
    },
    {
      path:'books',
      element:<Book></Book>,
      loader:()=>fetch('https://api.itbook.store/1.0/new')
    },
    {
      path:'book/:bookId',
      element:<BookInfo></BookInfo>,
      loader:({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
    },
    {
      path:'order',
      element:<Oder></Oder>
    }
  ]
  },
]);