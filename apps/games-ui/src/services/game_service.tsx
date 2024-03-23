import axios from "axios";

export const getGameList = async () => {
  const resp = await axios.get('http://localhost:3333/api/v1/games')
  return resp.data
}

// export const sendPlayId = async ({request}: ActionFunctionArgs) => {
//   const form = await request.formData()
//   const id = form.get('id')
//   const formData = await axios
//     .post(`http://localhost:3333/api/v1/games/${id}`, form)
//     .then((resp) => resp.data)
//     .then((data) => {
//       localStorage.setItem('actionData', JSON.stringify(data))
//     })
//   return formData
// }

export const getUUID = async () => {
  const resp = await axios.post('http://localhost:3333/api/v1/games/:id')
  return resp.data
}

