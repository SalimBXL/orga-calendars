import React from "react";

const Options = ({showJobs, handleJobs, showAbsences, handleAbsences, showAllUsers, handleAllUsers}) => {

    return (
    <div className="container">
        <form className="row form-inline">

            <div className="col">
                <div className="row">
                    <div className="col form-check" id="jobs" data-bs-toggle="tooltip" title="Show/Hide jobs">
                        <input id="jobsCheck" type="checkbox" checked={showJobs} 
                                className="form-check-input" onChange={handleJobs} />
                        <label className="form-check-label" >Jobs</label>
                    </div>

                    <div className="col form-check" id="absences" data-bs-toggle="tooltip" title="Show/Hide absences">
                        <input id="absencesCheck" type="checkbox" checked={showAbsences} 
                                className="form-check-input" onChange={handleAbsences} />
                        <label className="form-check-label" >Absences</label>
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="row">
                    <div className="col-sm-6 form-check" data-bs-toggle="tooltip" title="Show all users">
                        <label className="form-check-label" >
                            <input id="allUsersRadio" type="radio" name="optradio"
                                className="form-check-input" checked={showAllUsers ? true : false} 
                                onChange={handleAllUsers} /> Show all users
                        </label>
                    </div>

                    <div className="col-sm-6 form-check" data-bs-toggle="tooltip" title="Show only active users">
                        <label className="form-check-label" >
                            <input id="actUsersRadio" type="radio" name="optradio"
                                className="form-check-input" checked={!showAllUsers ? true : false}
                                onChange={handleAllUsers} /> Active users
                        </label>
                    </div>
                </div>
            </div>
        </form>
    </div>
)}

export default Options