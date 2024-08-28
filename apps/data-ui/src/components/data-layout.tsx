import { Box, Container } from "@mui/material"
import Header from "./header"
import { Outlet } from "react-router-dom"
import Footer from "./footer"

export default function DataLayout() {
    return (
      <Container sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Header/>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Outlet/>
        </Box>
        <Footer />
      </Container>
    )
  }