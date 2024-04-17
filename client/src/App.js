import {BrowserRouter, Routes, Route} from "react-router-dom"
import Phones from "./phones/AllPhones";
import AddPhone from "./phones/AddPhone";
import UpdatePhone from "./phones/UpdatePhone";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Phones/>}/>
          <Route path="/add" element={<AddPhone/>}/>
          <Route path="/update" element={<UpdatePhone/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
