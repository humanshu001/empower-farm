
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Main() {
  return (
    <>
        <Navbar />
        <Outlet/>
    </>
  )
}
