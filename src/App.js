import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./Home"
import Calendar from "./Calendar"


const App = () =>(
  <>
    <BrowserRouter>
      <Navbar />
      <h1>TEST</h1>

      <div className="container p-3 my-3 border">

        <Routes>
          <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="calendar" element={<Calendar />} />
              <Route path="day" element={<Calendar calendar={"day"}/>} />
              <Route path="week" element={<Calendar calendar={"week"}/>} />

        </Routes>
      </div>
    </BrowserRouter>
  </>
);

export default App;
