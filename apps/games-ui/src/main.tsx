import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './app/app';
import GameList from './components/game_list';
import GamePlay from './components/game_play';
import { getGameList, getGamePlay } from './services/game_service';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/', //welcome page
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "games",
        Component: GameList, 
        loader: getGameList,
      },
      {
        path: "games/:id",
        Component: GamePlay,
        loader: getGamePlay,
      }
    ]
  }
])

root.render(
  <StrictMode>
    <RouterProvider router={router} /*fallbackElement={<waiting/>*/ />
  </StrictMode>
);
