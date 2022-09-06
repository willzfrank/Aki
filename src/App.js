import './App.css';
import Home from './pages/home/Home';
import {Routes, Route} from "react-router-dom"
import Login from "./pages/login/Login.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={  <Home />}/>
        <Route path="/login" element ={  <Login />}/>
      </Routes>
    
    </div>
  );
}

export default App;
