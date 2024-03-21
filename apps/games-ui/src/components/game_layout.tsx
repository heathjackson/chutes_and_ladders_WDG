import { Outlet, Form } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function GameLayout() {
  return (
    <div>
      <Header/>
      <main>
        <Form method="post"/>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}