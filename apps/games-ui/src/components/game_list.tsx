import { useLoaderData } from "react-router-dom";
import { IGameInfo } from "@hjackson/model";
import { Link } from "react-router-dom";

const GameList = () => {
  const games = useLoaderData() as Array<IGameInfo>
  return(<ul>{games.map(g => <li><Link to={`/games/${g.name}`}>{g.name}</Link></li>)}</ul>)
} 

export default GameList


