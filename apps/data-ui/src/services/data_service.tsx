import axios from "axios";
import { ActionFunctionArgs, redirect } from "react-router-dom";

//action of what is happening before each function
export const getListArtists = async () => {
  const res = await axios.get('http://localhost:3333/api/v2/artists')
  return res.data
}

export const addArtist = async ({request}: ActionFunctionArgs)  => {
  const form = await request.formData()
  const artistInfo = {
    artist_id: 0,
    name: form.get("artistName")
  }
  console.log(`addArtist = artist_id = ${artistInfo.artist_id} name = ${artistInfo.name}`)
  try {
    await axios.post(`http://localhost:3333/api/v2/artists`, artistInfo)
    return redirect('/artists')
  }
    catch(error){
    console.log(error)
    return null
  }
}

