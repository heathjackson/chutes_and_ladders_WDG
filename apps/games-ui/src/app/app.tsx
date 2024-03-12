import GameList from "../components/game_list";
import { getGameList } from "../services/game_service";
import GameLayout from "../components/game_layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameInfo from "../components/game_info";
import Welcome from "../pages/pre_loader";

const router = createBrowserRouter (
  [
    {
      Component: GameLayout,
      children: [
        {
          path: "/",
          Component: Welcome, 
        },
        {
          path: "games",
          Component: GameList, 
          loader: getGameList,
        },
        {
          path: "games/:id",
          Component: GameInfo,
          loader: getGameList,
        },
      ]
    }
  ]  
)

function App() {
 return <RouterProvider router={router}/>
}

export default App;
