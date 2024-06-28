import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./router";
import { Fragment } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";
const App = () => {
   return (
   <Fragment>
      <ToastContainer/>
         <RouterProvider router={createBrowserRouter(router)} />
   </Fragment>
   )
}

export default App;