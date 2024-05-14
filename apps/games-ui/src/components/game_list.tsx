import { IGameInfo } from "@hjackson/model";
import { useRouteLoaderData, Link } from "react-router-dom";


const GameList = () => {
  const games = useRouteLoaderData("game_list") as IGameInfo[]


  return(<ul>{games.map(g => <li key={g.id}><Link to={`/games/${g.name}`}>{g.name}</Link></li>)}</ul>)
} 

export default GameList


