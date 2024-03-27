import GameList from "../components/game_list";
import { getGameInfo, getGameList, playGame, register } from "../services/game_service";
import GameLayout from "../components/game_layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameInfo from "../components/game_info";
import Welcome from "../pages/welcome";
import { SignupForm } from "../components/form";

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
          id: 'game_list',
          loader: getGameList,
          children: [
            {
              index: true,
              Component: GameList,
            },
            {
              path: ':id',
              loader: getGameInfo,
              children: [
                {
                  index: true,
                  Component: GameInfo,
                  action: playGame,
                },
                {
                  path: 'register',
                  children: [
                    {
                      index: true,
                      Component: SignupForm,
                      action: register,
                    }
                  ]
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

//post in form goes to router which then has a function that uses axios
