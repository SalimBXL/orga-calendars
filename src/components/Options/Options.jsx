import React from "react";

const Options = ({showJobs, handleJobs, showAbsences, handleAbsences, showAllUsers, handleAllUsers}) => {

    return (
    <div className="container">
        <form className="row form-inline">

            <div className="col form-group" id="jobs">
                <label>
                    <input type="checkbox" checked={showJobs} onChange={handleJobs} /> Jobs
                </label>
            </div>

            <div className="col form-group" id="absences">
                <label>
                    <input type="checkbox" checked={showAbsences} onChange={handleAbsences} /> Absences
                </label>
            </div>

            <div className="col form-group">
                <label>
                    <input type="checkbox" checked={showAllUsers} onChange={handleAllUsers} /> Show all users
                </label>
            </div>
        </form>
    </div>
)}

export default Options