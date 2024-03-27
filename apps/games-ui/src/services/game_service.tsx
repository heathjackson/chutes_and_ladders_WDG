import axios from "axios";
import { IGameInfo } from "@hjackson/model";
import { LoaderFunctionArgs, ActionFunctionArgs, redirect } from "react-router-dom";

export const getGameList = async () => {
  return axios.get('http://localhost:3333/api/v1/games')
    .then(resp =>  resp.data)
    .then(data => {
      return data as IGameInfo[]
      //may not need the .then here and can return resp.data instead
  })
}

export const getGameInfo = async({params}: LoaderFunctionArgs) => {
  if(params.id) {
    const resp = await axios.get(`http://localhost:3333/api/v1/games/${params.id}`)
    return resp.data as IGameInfo
  }
  return null;
}

export const playGame = async ({params}: ActionFunctionArgs) => {
  if (params.id) {
    const resp = await axios.post(`http://localhost:3333/api/v1/games/${params.id}`)
      .then(resp => resp.data)
      .then(data => {
        localStorage.setItem('current_game', JSON.stringify(data));
        return redirect(`/games/${params.id}/register`);
      })
      return resp
  }
  return null;
}

export const register = async ({params}: ActionFunctionArgs) => {
    const resp = await axios.patch(`http://localhost:3333/api/v1/games/${params.id}/register`)
      .then(resp => resp.data)
      .then(data => {
        localStorage.setItem('__register_info__', JSON.stringify(data));
        console.log(localStorage)
      })
      return resp
  }
 

