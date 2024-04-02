import axios from "axios";
import { IGameInfo } from "@hjackson/model";
import { LoaderFunctionArgs, ActionFunctionArgs, redirect } from "react-router-dom";

export const getGameList = async () => {
  const res = await axios.get('http://localhost:3333/api/v1/games')
  return res.data
}


export const getGameInfo = async({params}: LoaderFunctionArgs) => {
  return axios.post(`http://localhost:3333/api/v1/games/${params.id}`)
  .then(resp => resp.data)
  .then(resp => {
    return resp as IGameInfo[]
  })
}

export const playGame = async ({params}: ActionFunctionArgs) => {
  if (params.id) {
    const resp = await axios.post(`http://localhost:3333/api/v1/games/${params.id}`)
      .then(resp => resp.data)
      .then(data => {
        sessionStorage.setItem('current_game', JSON.stringify(data));
        return redirect(`/games/${params.id}/register`);
      })
      return resp
  }
  return null;
}

export const registerAction = async ({request}: ActionFunctionArgs) => {
  const form = await request.formData()
  console.log(form.get("uuid"))
  return form
}

