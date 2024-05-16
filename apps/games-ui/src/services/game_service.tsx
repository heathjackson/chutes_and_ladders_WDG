import axios from "axios";
import { ActionFunctionArgs } from "react-router-dom";

export const getGameList = async () => {
  const res = await axios.get('http://localhost:3333/api/v1/games')
  console.log('get game list')
  console.log(res.data)
  return res.data
}

export const playGame = async ({params}: ActionFunctionArgs) => {
  console.log('called')
  if (params.id) {
    const resp = await axios.post(`http://localhost:3333/api/v1/games/${params.id}`)
        sessionStorage.setItem('current_game', resp.data.gameID)
        return null
  }
  return null;
}

export const registerAction = async ({request, params}: ActionFunctionArgs) => {
  const form = await request.formData()
console.log(sessionStorage.getItem('current_game'))
  const registerInfo = {
    userName: form.get("userName"),
    avatar: form.get("avatar"),
    gameInstanceId: sessionStorage.getItem('current_game')//get rid of uuid completely - it's saved in session storage
  }
    
  const res = await axios.post(`http://localhost:3333/api/v1/games/${params.id}/register`, registerInfo)
  console.log(`gameService res data = ${JSON.stringify(res.data)}`)
  return res.data 
}





