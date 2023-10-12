import App from "./App";
import  { lazy, Suspense } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Listevisning from "./Listevisning";
import ErrorView from "./ErrorView";
import DetailView from "./DetailView";
import LoadingView from "./LoadingView"
// import Bookmarks from "./Bookmarks";
const Bookmarks = lazy(() => import("./Bookmarks"));


import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { listViewData } from "./Listevisning";
import { DetailsViewData } from "./DetailView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index loader={listViewData} element={<Listevisning />} />
      {/* <Route path="/bookmarks" element={<Bookmarks />} /> */}
      <Route
        path="/bookmarks"
        element={
       
          <Suspense fallback={
              <div >
            {<LoadingView />}
              </div>
            }>
            <Bookmarks />
          </Suspense>
        }
      />
      
      <Route
        path="/details/:id"
        loader={DetailsViewData}
        element={<DetailView />}
      />

      
   
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
