import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataLayout from "../components/data-layout";
import Welcome from "../components/welcome";
import { getListArtists } from "../services/data_service";
import ArtistInfo from "../components/artist-info";
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
          id: "artist_list",
          loader: getListArtists,
          children: [
            {
              index: true,
              Component: DataChart
            },
            {
              path: ':id',
              children: [
                {
                  index: true,
                  Component: ArtistInfo
                }
              ]
            }
          ]
        }
      ]
    }
  ]
)

function App() {
  return <RouterProvider router={router} />
}

export default App;
