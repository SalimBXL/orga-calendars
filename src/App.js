import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Options from "./components/Options/Options";
import Table from "./components/Table/Table"

const planning_jobs = [
  {id: 1, user: "user1 user1", date: "2021-11-25", jobs: ["5", "L"]},
  {id: 2, user: "user1 user1", date: "2021-11-26", jobs: ["M"]},
  {id: 3, user: "user2 user2222", date: "2021-11-25", jobs: ["QC"]},
  {id: 4, user: "user3", date: "2021-11-22", jobs: ["QC"]},
]

const planning_absences = [
  {id: 0, user: "user1 user1", date: "2021-11-23", absence: "Ma", confirmed: true},
  {id: 1, user: "user1 user1", date: "2021-11-24", absence: "Ma", confirmed: true},
  {id: 2, user: "user4", date: "2021-11-23", absence: "Mi", confirmed: true},
  {id: 3, user: "user2 user2222", date: "2021-11-25", absence: "Co", confirmed: false},
]

const all_users = [ "user1 user1", "user2 user2222", "user3", "user4", "user5", "user6"]

function App() {

  const [showJobs, setShowJobs] = useState(true);
  const [jobs, setJobs] = useState(showJobs ? planning_jobs : []);
  const handleJobs = ({target}) => { 
    setShowJobs((prev) => !prev)
    setJobs(!showJobs ? planning_jobs : [])
  }

  const [showAbsences, setShowAbsences] = useState(false);
  const [absences, setAbsences] = useState(showAbsences ? planning_absences : []);
  const handleAbsences = ({target}) => {
    setShowAbsences((prev) => !prev)
    setAbsences(!showAbsences ? planning_absences : [])
  }

  const [showAllUsers, setShowAllUsers] = useState(false);
  const handleAllUsers = ({target}) => {
    setShowAllUsers((prev) => !prev)

  }
  
  return (
    <div>
      <h1>TEST</h1>

      
      
      <div id="FilterableTable" className="container p-3 my-3 border">
        <h2>Week Calendar</h2>

        <Options 
          showJobs={showJobs} handleJobs={handleJobs}
          showAbsences={showAbsences} handleAbsences={handleAbsences}
          showAllUsers={showAllUsers} handleAllUsers={handleAllUsers}
        />
  
        <Table jobs={jobs} absences={absences} allUsers={showAllUsers && all_users}/>
      </div>
    </div>
  );
}

export default App;
