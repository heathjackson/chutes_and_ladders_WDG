import { useLoaderData } from "react-router-dom"
import { IGameInfo } from "@hjackson/model"
import { useParams } from "react-router-dom"



const GameInfo = () => {
  const {id}  = useParams();
  const games = useLoaderData() as Array<IGameInfo>
  const result = games.find(({name}) => name === id)
  //need to figure out how to render all the rules - also ask about a better way to render the below info instead of using ?

  return(
    <div>
      <h2>Rules for {result?.name}</h2>
      <ul>
        <li>{result?.description}</li>
        <img src={result?.imageURL} alt="Game"/>
      </ul>
    </div>
  )
}
  

export default GameInfo