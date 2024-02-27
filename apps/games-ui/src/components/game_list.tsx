import { useLoaderData } from "react-router-dom";
import { IGame } from "@hjackson/model";

const GameList = () => {
  const games = useLoaderData() as Array<IGame>
  return(<ul>{games.map(g => <li>{g.name}</li>)}</ul>)
}

export default GameList


