import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            All About Music
          </Typography>
          <IconButton
            href="/"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, }}
          >
            <HomeIcon sx={{
              fontSize: 40
            }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}