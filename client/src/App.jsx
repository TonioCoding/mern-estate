import { BroswerRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Profile from './pages/Profile'


const App = () => {
  return ( 
  <BroswerRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn/>} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    </Routes>
  </BroswerRouter>
  )
}

export default App


