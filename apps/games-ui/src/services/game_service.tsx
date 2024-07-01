import { IGameBoard } from "@hjackson/model";
import axios from "axios";
import { ActionFunctionArgs, redirect } from "react-router-dom";

//actiopn of what is happening before each function
export const getListGames = async () => {
  const res = await axios.get('http://localhost:3333/api/v1/games')
  return res.data
}

export const saveGameIDSessionStorage = async ({params}: ActionFunctionArgs) => {
  if (params.id) {
    const resp = await axios.post(`http://localhost:3333/api/v1/games/${params.id}`)
        sessionStorage.setItem('current_game', resp.data.gameID)
        return null
  }
  return null;
}

export const register = async ({request, params}: ActionFunctionArgs) => {
  const form = await request.formData()
  const registerInfo = {
    userName: form.get("userName"),
    color: form.get("color"),
    gameInstanceId: sessionStorage.getItem('current_game')
  }
  
  sessionStorage.setItem('currentUserInfoWithGameId', JSON.stringify(registerInfo))

  try {

  
  const resp = await axios.patch(`http://localhost:3333/api/v1/games/${params.id}/register`, registerInfo)

  const gameBoard: IGameBoard = resp.data.gameSpaceValues

  return gameBoard


}catch(error){
  console.log(error)
  return null
}
}

// export const boardLoader = async ({params}: LoaderFunctionArgs) => {
//   const res = await axios.get(`http://localhost:3333/api/v1/games/${params.id}/register`)
//   console.log(`boardLoader = ${boardLoader}`)
//   return res.data
// }





