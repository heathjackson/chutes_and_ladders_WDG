import { useParams } from "react-router-dom";

const GamePlay = () => {
  const {id} = useParams();
  return <div>Game being played {id}</div>
}

export default GamePlay