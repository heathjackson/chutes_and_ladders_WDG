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