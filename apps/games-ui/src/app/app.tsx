import GameList from "../components/game_list";
import { getGameList, getPlayId } from "../services/game_service";
import GameLayout from "../components/game_layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameInfo from "../components/game_info";
import Welcome from "../pages/welcome";
import GameUUID from "../components/game_uuid";

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
          children: [
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
            {
              path: "games/:id",
              Component: GameUUID,
              loader: getPlayId
            },
          ]
        },
      ]
    }
  ]  
)

function App() {
 return <RouterProvider router={router}/>
}

export default App;

//post in form goes to router which then has a function that uses axios
