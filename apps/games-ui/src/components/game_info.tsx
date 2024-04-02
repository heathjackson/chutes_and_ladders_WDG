import { IGameInfo } from "@hjackson/model"
import { useParams, Form, useRouteLoaderData } from "react-router-dom"
import { Button } from "@mui/material";

const GameInfo = () => {
  const {id}  = useParams();
  const games = useRouteLoaderData("game_info") as Array<IGameInfo>
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
        <div>{rulesMap}</div>
        <img src={gameInfo?.imageURL} alt="Game"/>
      </ul>
      <Form method="POST">
        <Button 
          variant="contained" 
          name="id" 
          value={id}
          type="submit"
        >Register
        </Button>
      </Form>
    </div>
  )
}
  

export default GameInfo