import { IGameBuilder } from "@hjackson/model";
import { useLoaderData } from "react-router-dom";

const GameUUID = () => {
  const game = useLoaderData() as IGameBuilder

  return(
    <div>{game.uuid}</div>
  )
};

export default GameUUID;
