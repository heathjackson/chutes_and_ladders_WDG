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
    const res = await axios.post(`http://localhost:3333/api/v2/artists`, artistInfo)
    return res.data
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

export const getArtist = async (artistName: any) => {
  try {
    const resp = await axios.get(`http://localhost:3333/api/v2/artists/${artistName}`)
    return resp.data
  }
  catch(error){
    console.log(error)
    return null
  }
}


export const deleteArtist = async (artistId: any) => {
  try { await axios.delete(`http://localhost:3333/api/v2/artists/${artistId}`)
  }
  catch(error){
    console.log(error)
    return null
  }
}







