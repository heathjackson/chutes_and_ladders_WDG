import axios from "axios";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export const getGameList = async () => {
  const resp = await axios.get('http://localhost:3333/api/v1/games')
  return resp.data
}

export const getPlayId = async ({request}: ActionFunctionArgs) => {
  const form = await request.formData()
  const id = form.get('id')
  const formData = await axios
    .post(`http://localhost:3333/api/v1/games/${id}`, form)
    .then((resp) => resp.data)
    .then((data) => {
      localStorage.setItem('actionData', JSON.stringify(data))
    })
  redirect('/games/register')
  return formData
}
