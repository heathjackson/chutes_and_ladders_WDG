import { Container } from "@mui/material"
import Header from "./header"
import { Outlet } from "react-router-dom"
import Footer from "./footer"

export default function DataLayout() {
    return (
      <Container>
        <Header/>
        <Outlet/>
        <Footer />
      </Container>
    )
  }