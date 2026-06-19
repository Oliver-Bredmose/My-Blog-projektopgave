import { BrowserRouter, Routes, Route } from "react-router-dom"
import {MainPage} from "./Pages/MainPage/MainPage"
import {ArticlePage} from "./Pages/ArticlePage/articlePage"
import {LoginPage} from "./Pages/Login/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/artikel/:id" element={<ArticlePage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App