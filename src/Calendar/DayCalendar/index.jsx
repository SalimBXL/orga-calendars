import React from "react";
import PropTypes from 'prop-types';
import Table from "../components/Table/Table"

const DayCalendar = ({tasks, jobs, absences, allUsers, showAllUsers, department, fromTo, OptionsContainer}) => (
    
    <>

    <div id="FilterableTable">

        <div className="d-flex justify-content-between mb-3">

            <div className="p-2">

                <h2>Day Calendar</h2>

                <span className="badge rounded-pill bg-secondary">{fromTo.from} -- {fromTo.to}</span>

            </div>

            <div className="p-2 department"><h4>{department.service} {department.location}</h4></div>

        </div>

        <OptionsContainer />

        <Table tasks={tasks} jobs={jobs} absences={absences} showAllUsers={showAllUsers} allUsers={showAllUsers && allUsers} />
    </div>
    </>
);

DayCalendar.prototype = {
    showAllUsers: PropTypes.bool,
    jobs: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired,
    absences: PropTypes.array.isRequired,
    allUsers: PropTypes.array
}

export default DayCalendar;