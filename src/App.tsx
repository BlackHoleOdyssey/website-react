import './App.css'
import NavBar from './Components/Layouts/Navbar/Navbar'
import Footer from './Components/Layouts/Footer/Footer'
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<div></div>}/>
                    <Route path="/games" element={<div></div>}/>
                    <Route path="/packages" element={<div></div>}/>
                    <Route path="/about" element={<div></div>}/>
                    <Route path="/contact" element={<div></div>}/>
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
