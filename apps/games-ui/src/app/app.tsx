import GameList from "../components/game_list";
import { getListGames, saveGameIDSessionStorage, register } from "../services/game_service";
import GameLayout from "../components/game_layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameInfo from "../components/game_info";
import Welcome from "../pages/welcome";
import { Register } from "../components/form";
import GamePlay from "../components/game_play";

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
          id: "game_list",
          loader: getListGames,
          children: [
            {
              index: true,
              Component: GameList,
            },
            {
              path: ':id',
              id: "game_info",
              
              children: [
                {
                  index: true,
                  Component: GameInfo,
                },
                {
                  path: 'register',
                  action: saveGameIDSessionStorage,
                  children:[
                    {
                      index: true,
                      Component: Register,
                    }
                  ]
                },
                {
                  path: 'playGame',
                  action: register,
                  Component: GamePlay
                  // children: [
                  //   {
                  //     index: true,
                      
                  //   }
                  // ]

                  
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
 return <RouterProvider router={router}/>
}

export default App;
