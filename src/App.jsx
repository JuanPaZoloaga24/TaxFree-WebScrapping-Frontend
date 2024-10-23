import Login from "./components/Login";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from "./components/Register";
import Home from "./components/Home";


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>

        </Routes>
      </BrowserRouter>   
    </div>
  )
}

export default App
