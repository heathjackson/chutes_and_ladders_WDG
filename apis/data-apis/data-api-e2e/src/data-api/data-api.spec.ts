import axios from 'axios';
describe('GET /', () => {
  it('should return a message', async () => {
    const res = await axios.get('http://localhost:3333/api/v2')
      expect(res.status).toBe(200);
      expect(res.data).toEqual({ message: 'Welcome to data-api!' });
  });
});

describe('GET /artists/:name', () => {
  const name = 'Alanis Morissette'
  it('should return an id and name', async () => {
    const res = await axios.get(`http://localhost:3333/api/v2/artists/${name}`)
      expect(res.data[0].name).toEqual('Alanis Morissette');
      expect(res.data[0].artist_id).toEqual(4)
  })
})

describe('POST/artists', () => {
 
  it('should return added using axios and artist_id', async () => {
    const body = {
      name: 'added using axios',
      artist_id: 0
    }
  
    const res = await axios.post('http://localhost:3333/api/v2/artists', body)
      body.artist_id = res.data.artist_id
      console.log(`post body ${JSON.stringify(body)}`)
      
      expect(res.data.name).toEqual('added using axios')
      expect(res.data.artist_id).toBeTruthy
      //delete the added test artist
      await axios.delete(`http://localhost:3333/api/v2/artists/${body.artist_id}`)
  })

  // it('should return an id and name', async () => {
  //   const res = await axios.get(`http://localhost:3333/api/v2/artists/${body.name}`)
  //     body.artist_id = res.data[0].artist_id
  //     console.log(`get body ${JSON.stringify(body)}`)
  //     expect(res.data[0].name).toEqual('added using axios')
  // })

  // it('delete an artist in database', async () => {
  //   const res = await axios.delete(`http://localhost:3333/api/v2/artists/${body.artist_id}`)
  //     console.log(`delete body ${JSON.stringify(res.data)}`)
  //     expect(res.data.count).toBeTruthy
  // })
})

describe('PUT/artists/:id', () => {
  const body = {
    artist_id: 1,
    name: 'AC/DC changed'
  }

  const changeBack = {
    artist_id: 1,
    name: 'AC/DC'
  }
  it('should return added using axios and artist_id', async () => {
    const res = await axios.put(`http://localhost:3333/api/v2/artists/${body.artist_id}`, body)
      expect(res.data.name).toEqual('AC/DC changed')

      //set data back to original so test can run again
      await axios.put(`http://localhost:3333/api/v2/artists/${changeBack.artist_id}`, changeBack)
  })
})

