import axios from "axios";

//action of what is happening before each function
export const getListArtists = async () => {
  const res = await axios.get('http://localhost:3333/api/v2/artists')
  return res.data
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addArtist = async (name: any)  => {
  const artistInfo = {
    name: name
  }
  try {
    await axios.post(`http://localhost:3333/api/v2/artists`, artistInfo)
  }
    catch(error){
    console.log(error)
    return null
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateArtists = async (artistId: any, editedRow: any) => {
  try {
    await axios.put(`http://localhost:3333/api/v2/artists/${artistId}`, editedRow)
  }
  catch(error){
    console.log(error)
    return null
  }
}





