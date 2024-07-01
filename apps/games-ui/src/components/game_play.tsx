import { useLoaderData } from "react-router-dom";

export const GamePlay = () => {

  const board = useLoaderData()
  console.log(`board = ${board}`)

  return(
    <div>
      <div>You have been registered</div> 
    </div>
  )
};

export default GamePlay;
