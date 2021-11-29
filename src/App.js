import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Calendar from "./Calendar"



const App = () =>(
  <>
    
      <h1>TEST</h1>

      <div className="container p-3 my-3 border">
        <Calendar url={"./local-json/data.json"} />
      </div>
  </>
);

export default App;
