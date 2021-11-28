import React, { useState, useEffect } from "react"
import DayCalendar from "./DayCalendar"
import WeekCalendar from "./WeekCalendar"
import Navbar from "./Navbar/Navbar"
import Options from "./components/Options/Options";

const Calendar = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [department, setDepartment] = useState("");
  const [fromTo, setFromTo] = useState({});

  const [pageToShow, setPageToShow] = useState("");
  const handlePage = (page) => {
    setPageToShow(page);
  }
  
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
  const [showAbsences, setShowAbsences] = useState(true);
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

          setDepartment(result.department);
          setFromTo(result.dates);

          const myMap = new Map();
          result.users.map((user) => myMap.set(user.id, user));
          setAllUsers(result.users);

          setPlanningAbsences(result.planning_absences.map((a) => {
            return { "id": a.id, "date": a.date, "absence": a.absence, "confirmed": a.confirmed, "user": myMap.get(a.user_id) }}
          ));
          
          setPlanningJobs(result.planning_jobs.map((j) => {
            const _jobs = { "am": j.am, "pm": j.pm }
            return { "id": j.id, "date": j.date, "jobs": _jobs, "user": myMap.get(j.user_id) }}
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
    setAbsences(planningAbsences);
  }, [planningAbsences]);

  useEffect(() => {
    setTasks(planningTasks);
  }, [planningTasks]);


  if(error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Retrieving data from server...</div>;
  } else {

    const CalenderToShow = () => (pageToShow === "day") 
      ? <DayCalendar tasks={tasks} jobs={jobs} absences={absences} 
                      allUsers={allUsers} showAllUsers={showAllUsers} department={department} 
                      fromTo={fromTo} OptionsContainer={OptionsContainer} />
      : (pageToShow === "week")
        ? <WeekCalendar tasks={tasks} jobs={jobs} absences={absences} 
                      allUsers={allUsers} showAllUsers={showAllUsers} department={department} 
                      fromTo={fromTo} OptionsContainer={OptionsContainer} />
        : <p>MONTH</p>

    const OptionsContainer = () => (
      <Options  showJobs={showJobs} handleJobs={handleJobs}
                showAbsences={showAbsences} handleAbsences={handleAbsences}
                showTasks={showTasks} handleTasks={handleTasks}
                showAllUsers={showAllUsers} handleAllUsers={handleAllUsers} />);


    return (
      <div>

        <Navbar handleDay={()=>handlePage("day")} 
                handleWeek={()=>handlePage("week")} 
                handleMonth={()=>handlePage("month")} />

        <CalenderToShow />

      </div>
    )
  }
}

export default Calendar;
