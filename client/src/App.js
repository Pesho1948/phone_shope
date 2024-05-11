import {BrowserRouter, Routes, Route} from "react-router-dom";
import Phones from "./phones/AllPhones.jsx";
import AddPhone from "./phones/AddPhone.jsx";
import UpdatePhone from "./phones/UpdatePhone.jsx";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Phones/>}/>
          <Route path="/add" element={<AddPhone/>}/>
          <Route path="/update/:id" element={<UpdatePhone/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
