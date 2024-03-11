import { Outlet } from "react-router-dom";
import Header from "./header";

export default function GameLayout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}