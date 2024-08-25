import { Button, Box } from "@mui/material"

const Welcome = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        <Button href="/artists">List Current Artists</Button>
        <Button href="/artists/getInfo">Get Artist Info</Button>
        <Button href="/artists/add">Add Artist</Button>
        <Button href="/artists/update">Update Artist</Button>
        <Button href="/artists/delete">Delete Artist</Button>
    </Box>
  )
}

export default Welcome