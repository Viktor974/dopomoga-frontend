import {Routes, Route} from 'react-router-dom'
import MainPage from './Pages/MainPage.js'
import Singup from "./modal/singup.js";
import Login from "./modal/login.js";
import Home from "./Pages/Home.js";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/reg" element={<Singup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/add-post" element={<Login/>}/>
            <Route path="/donate" element={<Login/>}/>
        </Routes>
    );
}

export default App;