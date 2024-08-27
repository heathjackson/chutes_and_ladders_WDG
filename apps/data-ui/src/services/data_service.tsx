import axios from "axios";
import { ActionFunctionArgs } from "react-router-dom";

//action of what is happening before each function
export const getListArtists = async () => {
  const res = await axios.get('http://localhost:3333/api/v2/artists')
  return res.data
}

export const addArtist = async ({request}: ActionFunctionArgs)  => {
  const form = await request.formData()
  const artistInfo = {
    artistName: form.get("userName")
  }
  try {
    const resp = await axios.post(`http://localhost:3333/api/v2/games/artists`, artistInfo)
    return resp.data
  }
    catch(error){
    console.log(error)
    return null
  }
}

