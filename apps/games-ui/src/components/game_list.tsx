import { useRouteLoaderData, Link } from "react-router-dom";

const GameList = () => {
  const games = useRouteLoaderData("game_list") as Array<string>

  return(<ul>{games.map(g => <li><Link to={`/games/${g}`}>{g}</Link></li>)}</ul>)
} 

export default GameList


