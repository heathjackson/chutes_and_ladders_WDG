import { useLoaderData } from "react-router-dom"
import { IGameInfo } from "@hjackson/model"

const GameInfo = () => {
  const games = useLoaderData() as Array<IGameInfo>
  return(<div>{games.map(g => 
        <ul>
          <div>{g.name}</div>
          <div>{g.description}</div>
          <img src={g.imageURL} alt="Game"/>
        </ul>
        )
      }
    </div>
  )
} 

export default GameInfo