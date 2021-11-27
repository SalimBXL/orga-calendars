import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Options from "./components/Options/Options";
import Table from "./components/Table/Table"


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const [planningJobs, setPlanningJobs] = useState([]);
  const [showJobs, setShowJobs] = useState(true);
  const [jobs, setJobs] = useState([]);
  const handleJobs = ({target}) => { 
    setShowJobs((prev) => !prev)
    setJobs(!showJobs ? planningJobs : [])
  }

  const [planningTasks, setPlanningTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(true);
  const [tasks, setTasks] = useState([]);
  const handleTasks = ({target}) => {
    setShowTasks((prev) => !prev);
    setTasks(!showTasks ? planningTasks : []);
  }

  const [planningAbsences, setPlanningAbsences] = useState([]);
  const [showAbsences, setShowAbsences] = useState(false);
  const [absences, setAbsences] = useState([]);
  const handleAbsences = ({target}) => {
    setShowAbsences((prev) => !prev)
    setAbsences(!showAbsences ? planningAbsences : [])
  }

  const [showAllUsers, setShowAllUsers] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const handleAllUsers = ({target}) => {
    setShowAllUsers((prev) => !prev)
  }

  useEffect(() => {
    const uri = "./local-json/week.json";
    fetch(uri, {headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' }})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);

          const myMap = new Map();
          result.users.map((user) => myMap.set(user.id, user));
          setAllUsers(result.users);

          setPlanningAbsences(result.planning_absences.map((a) => {
            return { "id": a.id, "date": a.date, "absence": a.absence, "confirmed": a.confirmed, "user": myMap.get(a.user_id) }}
          ));
          
          setPlanningJobs(result.planning_jobs.map((j) => {
            return { "id": j.id, "date": j.date, "jobs": j.jobs, "user": myMap.get(j.user_id) }}
          ));

          setPlanningTasks(result.planning_tasks.map((t) => {
            return { "id": t.id, "date": t.date, "code": t.code, "description": t.description, "user": myMap.get(t.user_id) }}
          ));




        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    setJobs(planningJobs);
  }, [planningJobs]);

  useEffect(() => {
    setTasks(planningTasks);
  }, [planningTasks]);


  if(error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Retrieving data from server...</div>;
  } else {
    return (
      <div>
        <h1>TEST</h1>

        
        
        <div id="FilterableTable" className="container p-3 my-3 border">
          <h2>Week Calendar</h2>

          <Options 
            showJobs={showJobs} handleJobs={handleJobs}
            showAbsences={showAbsences} handleAbsences={handleAbsences}
            showTasks={showTasks} handleTasks={handleTasks}
            showAllUsers={showAllUsers} handleAllUsers={handleAllUsers}
          />

          <Table tasks={tasks} jobs={jobs} absences={absences} showAllUsers={showAllUsers} allUsers={showAllUsers && allUsers}/>
        </div>
      </div>
    );
  }
}

export default App;
