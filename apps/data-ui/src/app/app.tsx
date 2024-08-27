import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataLayout from "../components/data-layout";
import Welcome from "../components/welcome";
import { getListArtists } from "../services/data_service";
import DataChart from "../components/data-grid";

const router = createBrowserRouter (
  [
    {
      path: '/',
      Component: DataLayout,

      children: [
        {
          index: true,
          Component: Welcome,
        },
        {
          path: 'artists',
          loader: getListArtists,
          Component: DataChart
        },
      ]
    }
  ]
)

function App() {
  return <RouterProvider router={router} />
}

export default App;
