import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './app/app';
import GameList from './components/game_list';
import { getGameList } from './services/game_service';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/', //welcome pag
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "games",
        Component: GameList, 
        loader: getGameList
      }
    ]
  }
])

root.render(
  <StrictMode>
    <RouterProvider router={router} /*fallbackElement={<waiting/>*/ />
  </StrictMode>
);
