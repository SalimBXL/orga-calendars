import React from "react"
import PropTypes from 'prop-types';
import Day from "../Day/Day"

const Week = ({events, absences}) => {
    
    const days = [
        { j: "", a: ""}, { j: "", a: ""}, { j: "", a: ""}, { j: "", a: ""}, { j: "", a: ""}, { j: "", a: ""}, { j: "", a: ""},
    ]

    events.map((event, index) => {
        const d = new Date(event.date)
        const numeroJour = d.getDay()
        days[numeroJour].j = event.jobs
        return null;
    })

    absences.map((absence, index) => {
        const d = new Date(absence.date)
        const numeroJour = d.getDay()
        days[numeroJour].a = {
            absence: absence.absence, 
            confirmed: absence.confirmed
        }
        return null;
    })

    return days.map((day, index) => 
        (index !== 0) && (
            (index !== 6)
                ? <Day id={index} sunday={false} key={index.toString()} jobs={day.j} absence={day.a} />
                : <Day id={index} sunday={true} key={index.toString()} jobs={day.j} absence={day.a} />
        )
    )
}

Week.prototype = {
    events: PropTypes.array,
    absences: PropTypes.array
}

export default Week