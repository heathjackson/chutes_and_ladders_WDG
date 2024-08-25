import axios from "axios";

//actiopn of what is happening before each function
export const getListArtists = async () => {
  const res = await axios.get('http://localhost:3333/api/v2/artists')
  return res.data
}
