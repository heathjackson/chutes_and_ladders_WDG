import axios from 'axios';
describe('GET /', () => {
  it('should return a message', async () => {
    const res = await axios.get('http://localhost:3333/api/v2')
      expect(res.status).toBe(200);
      expect(res.data).toEqual({ message: 'Welcome to data-api!' });
  });
});

//**** artist tests ****
describe('GET /artists/:name', () => {
  const name = 'Alanis Morissette'
  it('should return an id and name', async () => {
    const res = await axios.get(`http://localhost:3333/api/v2/artists/${name}`)
      expect(res.data[0].name).toEqual('Alanis Morissette');
      expect(res.data[0].artist_id).toEqual(4)
  })
})

describe('POST/artists, PUT/artists, DELETE/artists', () => {
  // eslint-disable-next-line prefer-const
  let body = {
    name: 'added using axios',
    artist_id: 0
  }

  // eslint-disable-next-line prefer-const
  let changeBody = {
    name: 'added using axios - I have been changed',
    artist_id: 0
  }

  it('should return added using axios and artist_id', async () => {
    const res = await axios.post('http://localhost:3333/api/v2/artists', body)
      body.artist_id = res.data.artist_id
      changeBody.artist_id = res.data.artist_id
      
      expect(res.data.name).toEqual('added using axios')
      expect(res.data.artist_id).toBeTruthy
  })

  it('should return changed', async () => { 
    const res = await axios.put(`http://localhost:3333/api/v2/artists/${body.artist_id}`, changeBody)
      expect(res.data.name).toEqual('added using axios - I have been changed')
  })

  it('delete an artist in database', async () => {
    const res = await axios.delete(`http://localhost:3333/api/v2/artists/${body.artist_id}`)
    expect(res.data.count).toBeTruthy
  })
})

// **** album tests ****
describe('GET /albums/:title', () => {
  const title = 'Jagged Little Pill'
  it('should return correct title, artist_id, and album_id', async () => {
    const res = await axios.get(`http://localhost:3333/api/v2/albums/${title}`)
      expect(res.data[0].title).toEqual('Jagged Little Pill')
      expect(res.data[0].artist_id).toEqual(4)
      expect(res.data[0].album_id).toEqual(6)
  })
})

describe('POST/artists, PUT/artists, DELETE/artists', () => {
  // eslint-disable-next-line prefer-const
  let body = {
    album_id: 0,
    title: 'added using axios',
    artist_id: 4
  }

  // eslint-disable-next-line prefer-const
  let changeBody = {
    album_id: 0,
    title: 'added using axios - I have been changed',
    artist_id: 4
  }

  it('should return added using axios, artist_id, and album_id', async () => {
    const res = await axios.post('http://localhost:3333/api/v2/albums', body)
      console.log(JSON.stringify(res.data))
      body.album_id = res.data.album_id
      changeBody.album_id = res.data.album_id
      
      expect(res.data.album_id).toBeTruthy
      expect(res.data.title).toEqual('added using axios')
      expect(res.data.artist_id).toEqual(4)
  })

  it('should return changed', async () => { 
    console.log(body.album_id)
    const res = await axios.put(`http://localhost:3333/api/v2/albums/${body.album_id}`, changeBody)
      expect(res.data.title).toEqual('added using axios - I have been changed')
  })

  it('delete an artist in database', async () => {
    const res = await axios.delete(`http://localhost:3333/api/v2/albums/${body.album_id}`)
    expect(res.data.count).toBeTruthy
  })
})
