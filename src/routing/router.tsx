import { createBrowserRouter } from "react-router-dom";
import PageRoot from "../pages/pageRoot";
import App from "../App";
import PageError from "../pages/pageError";

import PageReverberi from "../pages/pageReverberi";
import PageHamid from "../pages/pageHamid";

import PageTaouaf from "../pages/pageTaouaf";
import PageGabancho from "../pages/pageGabancho";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageRoot />,
    errorElement: <PageError />,

    
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "taouaf",
        element: <PageTaouaf />,
      },
      {
        path: "hamid",
        element: <PageHamid />,
      },
      {
        path: "gabancho",
        element: <PageGabancho/>
      }
    ],
  },
]);
