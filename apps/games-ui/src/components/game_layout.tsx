import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Container } from "@mui/material";

export default function GameLayout() {
  return (
    <Container>
      <Header/>
      <Outlet/>
      <Footer />
    </Container>
  )
}