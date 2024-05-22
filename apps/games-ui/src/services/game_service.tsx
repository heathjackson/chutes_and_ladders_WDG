import axios from "axios";
import { ActionFunctionArgs } from "react-router-dom";
//actiopn of what is happening before each function
export const listGames = async () => {
  const res = await axios.get('http://localhost:3333/api/v1/games')
  return res.data
}

export const gameID = async ({params}: ActionFunctionArgs) => {
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
    avatar: form.get("avatar"),
    gameInstanceId: sessionStorage.getItem('current_game')
  }
    
  const res = await axios.post(`http://localhost:3333/api/v1/games/${params.id}/register`, registerInfo)
  return res.data 
}





