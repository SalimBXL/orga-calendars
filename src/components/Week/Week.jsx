import React from "react"
import PropTypes from 'prop-types';
import Day from "../Day/Day"


const Week = ({user, jobs, absences}) => {
    const days = [
        { j: "", a: ""}, { j: "", a: ""}, { j: "", a: ""}, { j: "", a: ""}, { j: "", a: ""}, { j: "", a: ""}, { j: "", a: ""},
    ]

    jobs.map((job) => {
        const d = new Date(job.date)
        const numeroJour = d.getDay()
        days[numeroJour].j = job.jobs
        return null;
    })

    absences.map((absence) => {
        const d = new Date(absence.date)
        const numeroJour = d.getDay()
        days[numeroJour].a = {
            absence: absence.absence, 
            confirmed: absence.confirmed
        }
        return null;
    })

    return (
        <tr >
            <td >{user.fullname}</td>
            {days.map((day, index) => 
                (index !== 0) && (
                    (index !== 6)
                        ? <Day id={index} sunday={false} 
                                key={"user_id_"+ user.id +"_day_" + index.toString()} 
                                jobs={day.j} absence={day.a} />
                        : <Day id={index} sunday={true} 
                                key={"user_id_"+ user.id +"day_" + index.toString()} 
                                jobs={day.j} absence={day.a} />
                )
            )}
        </tr>
    )
}

Week.prototype = {
    user: PropTypes.string.isRequired,
    jobs: PropTypes.array,
    absences: PropTypes.array
}

export default Week