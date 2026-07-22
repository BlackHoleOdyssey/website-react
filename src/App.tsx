import './App.css'
import NavBar from './Components/Layouts/Navbar'
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <section>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<div>Home</div>}/>
                    <Route path="/games" element={<div>Games</div>}/>
                    <Route path="/packages" element={<div>Packages</div>}/>
                    <Route path="/about" element={<div>About</div>}/>
                    <Route path="/contact" element={<div>Contact</div>}/>
                </Routes>
            </section>
        </>
    )
}

export default App
