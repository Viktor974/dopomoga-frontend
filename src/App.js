import {Routes, Route} from 'react-router-dom'
import MainPage from './Pages/MainPage.js'
import Singup from "./modal/singup.js";
import Login from "./modal/login.js";
import Home from "./Pages/Home.js";

function App() {
    return (
        <Routes>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/reg" element={<Singup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default App;