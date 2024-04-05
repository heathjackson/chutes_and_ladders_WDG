import axios from "axios";
import { IGameInfo } from "@hjackson/model";
import { LoaderFunctionArgs, ActionFunctionArgs, redirect } from "react-router-dom";

export const getGameList = async () => {
  const res = await axios.get('http://localhost:3333/api/v1/games')
  return res.data
}

export const getGameInfo = async({params}: LoaderFunctionArgs) => {
  const res = await axios.get(`http://localhost:3333/api/v1/games/${params.id}`)
  return res.data as IGameInfo[]
}

export const playGame = async ({params}: ActionFunctionArgs) => {
  if (params.id) {
    const resp = await axios.post(`http://localhost:3333/api/v1/games/${params.id}/playGame`)
        localStorage.setItem('current_game', JSON.stringify(resp.data));
        return redirect(`/games/${params.id}/register`);
  }
  return null;
}

export const registerAction = async ({request, params}: ActionFunctionArgs) => {
  const form = await request.formData()

  const registerInfo = {
    userName: form.get("userName"),
    avatar: form.get("avatar"),
    uuid: form.get("uuid")
  }

  const res = await axios.put(`http://localhost:3333/api/v1/games/${params.id}/register`, registerInfo)
  return res.data 
}

