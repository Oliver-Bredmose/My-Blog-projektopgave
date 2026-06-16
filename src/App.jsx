import { BrowserRouter, Routes, Route } from "react-router-dom"
import Forside from "./Pages/MainPage"
import Artikel from "./Pages/articlePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/artikel/:id" element={<Artikel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App