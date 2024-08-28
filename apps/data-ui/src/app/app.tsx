import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataLayout from "../components/data-layout";
import Welcome from "../components/welcome";
import { addArtist, getListArtists } from "../services/data_service";
import DataChart from "../components/data-grid";
import { AddArtist } from "../components/form-add-artist";

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
        {
          path: 'addArtist',
          action: addArtist,
          Component: AddArtist
        }
      ]
    }
  ]
)

function App() {
  return <RouterProvider router={router} />
}

export default App;
