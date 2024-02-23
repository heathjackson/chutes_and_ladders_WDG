import { useLoaderData } from "react-router-dom";
import { Game } from "@hjackson/model";

const GameList = () => {
  const games = useLoaderData() as Array<Game>
  return(<ul>{games.map(g => <li>{g.name}</li>)}</ul>)
}

export default GameList