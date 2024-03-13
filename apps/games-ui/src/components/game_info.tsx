import { useLoaderData } from "react-router-dom"
import { IGameInfo } from "@hjackson/model"
import { useParams } from "react-router-dom"
import { Button } from "@mui/material"

const GameInfo = () => {
  const {id}  = useParams();
  const games = useLoaderData() as Array<IGameInfo>
  const gameInfo = games.find(({name}) => name === id)
  const rules = gameInfo?.rules

  const rulesMap = rules?.map((rule) => {
    return(
      <div>
        <h2>{rule.title}</h2>
        <div>{rule.value}</div>
      </div>
    )
  })

  return(
    <div>
      <h1>Rules for {gameInfo?.name}</h1>
      <ul>
        <li>{gameInfo?.description}</li>
          {rulesMap}
        <img src={gameInfo?.imageURL} alt="Game"/>
      </ul>
      <Button variant="contained">Play Game</Button>
    </div>
  )
}
  

export default GameInfo