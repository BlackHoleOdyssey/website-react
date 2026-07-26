import './App.css'
import './Common/colors.css'
import NavBar from './Components/Layouts/Navbar/navbar'
import Footer from './Components/Layouts/Footer/footer'
import Home from './Pages/Home/home'
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/games" element={<div></div>}/>
                    <Route path="/packages" element={<div></div>}/>
                    <Route path="/about" element={<div></div>}/>
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
