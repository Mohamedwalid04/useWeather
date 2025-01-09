import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./app.css"
import City from "./pages/City"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <BrowserRouter>
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
          <Header />
          <main className="flex justify-center items-center">
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Home />} />
              </Route>
              <Route path="/:country" element={<City />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
