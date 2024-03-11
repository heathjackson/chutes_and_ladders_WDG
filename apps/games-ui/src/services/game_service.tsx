import axios from "axios";

export const getGameList = async () => {
  const resp = await axios.get('http://localhost:3333/api/v1/games')
  return resp.data
}
