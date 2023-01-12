import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import "./styles/App.css";
import "./styles/header.css";
import "./styles/home.css";

function App() {


    return (
        <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>

        </Routes>



    </Router>
    );

}


export default App;

