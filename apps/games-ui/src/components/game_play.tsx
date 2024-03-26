import { IPlayGame } from "@hjackson/model";
import { useLoaderData } from "react-router-dom";

const GamePlay = () => {
  const game = useLoaderData() as IPlayGame

  return(
    <div>
      <div /*how do you pass this in a header?*/>{game.uuid}</div> 
    </div>
  )
};

export default GamePlay;
