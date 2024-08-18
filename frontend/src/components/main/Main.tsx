
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
  if (localStorage.getItem('token') === null) {
    navigate('/auth');
  }
  },[]);
  return (
    <>
        <Navbar />
        <Outlet/>
    </>
  )
}
