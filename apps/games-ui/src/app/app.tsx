import GameList from "../components/game_list";
import { getGameList, getUUID } from "../services/game_service";
import GameLayout from "../components/game_layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameInfo from "../components/game_info";
import Welcome from "../pages/welcome";
import GameUUID from "../components/game_uuid";

const router = createBrowserRouter (
  [
    {
      path: '/',
      Component: GameLayout,
      children: [
        {
          index: true,
          Component: Welcome, 
        },
        {
          path: 'games',
          children: [
            {
              index: true,
              Component: GameList, 
              loader: getGameList,
            },  
            {
              path: ":id",
              children: [
                {
                  index: true,
                  Component: GameInfo,
                  loader: getGameList,
                },
                {
                  path: "play",
                  Component: GameUUID,
                  loader: getUUID,
                }
              ]
            }
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
