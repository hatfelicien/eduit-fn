import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Pricing from "./pages/Pricing"
import Documentation from "./pages/Docs"
// import MainLayout from "./layouts/MainLayout"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route element={<MainLayout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Documentation />} />
        {/* </Route> */}
      </Routes>
    </Router>
  )
}

export default App
