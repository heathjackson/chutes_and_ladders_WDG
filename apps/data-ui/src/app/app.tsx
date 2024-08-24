import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataLayout from "../components/data-layout";

const router = createBrowserRouter (
  [
    {
      path: '/',
      Component: DataLayout
    }
  ]
)

function App() {
  return <RouterProvider router={router} />
}

export default App;
