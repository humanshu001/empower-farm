import './App.css'
import Auth from './components/auth'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Main from './components/main/Main'
import Buy from './components/main/Buy'
import Sell from './components/main/Sell'
import Contact from './components/main/Contact'
import Home from './components/main/Home'
import { Toaster } from "@/components/ui/sonner"
import Profile from './components/main/Profile'

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Main/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/buy' element={<Buy/>} />
            <Route path='/sell' element={<Sell/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/profile' element={<Profile/>} />
          </Route>
        </Routes>
        <Toaster />
    </Router>
    </>
  )
}

export default App
