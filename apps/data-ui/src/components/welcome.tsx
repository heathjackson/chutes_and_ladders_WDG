import { Button, Box } from "@mui/material"

const Welcome = () => {
  return (
    <Box 
      display="flex"
      flexDirection="column"
    >
        <Button sx={{height: '30vh', width: '50vw', fontSize: '1.5em'}} variant="outlined" href="/artists">List and Update Artists </Button>
    </Box>
  )
}

export default Welcome