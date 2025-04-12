import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
// import MainLayout from "./layouts/MainLayout"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route element={<MainLayout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* </Route> */}
      </Routes>
    </Router>
  )
}

export default App
