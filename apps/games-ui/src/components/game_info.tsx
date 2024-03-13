import { useLoaderData } from "react-router-dom"
import { IGameInfo } from "@hjackson/model"
import { useParams } from "react-router-dom"
import { Button } from "@mui/material"

const GameInfo = () => {
  const {id}  = useParams();
  const games = useLoaderData() as Array<IGameInfo>
  const gameInfo = games.find(({name}) => name === id)
  const rules = gameInfo?.rules[0]

  return(
    <div>
      <h2>Rules for {gameInfo?.name}</h2>
      <ul>
        <li>{gameInfo?.description}</li>
        <h4>{rules?.title}</h4>
        <li>{rules?.value}</li>
        <img src={gameInfo?.imageURL} alt="Game"/>
      </ul>
      <Button variant="contained">Contained</Button>
    </div>
  )
}
  

export default GameInfo