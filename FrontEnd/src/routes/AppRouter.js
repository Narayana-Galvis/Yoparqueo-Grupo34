import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../views/Home"
import DashBoard from "../views/DashBoard"
import NotFound from "../components/NotFound"

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />}/>
        <Route exact path="/" element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  )
}
