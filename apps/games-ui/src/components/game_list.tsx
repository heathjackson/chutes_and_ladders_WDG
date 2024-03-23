import { useRouteLoaderData, Link } from "react-router-dom";
import { IGameInfo } from "@hjackson/model";

const GameList = () => {
  const games = useRouteLoaderData('game_list') as Array<IGameInfo>
  return(<ul>{games.map(g => <li><Link to={`/games/${g.name}`}>{g.name}</Link></li>)}</ul>)
} 

export default GameList


