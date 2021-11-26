import React from "react"
import PropTypes from 'prop-types';

const Day = ({id, sunday, jobs, absence}) => {

    const style = absence 
        ? (absence.absence === "Co" && absence.confirmed)
            ? { backgroundColor: "green" , color: "white"}
            : (absence.absence === "Co" && !absence.confirmed)
                ? { backgroundColor: "lightgreen" , color: "green"}
                : (absence.absence === "Ma") 
                    ? { backgroundColor: "green" , color: "white"}
                    : {}
        : {};
    
        const clsName = sunday 
            ? "table-secondary"
            : absence.absence ==="Mi" 
                ? "table-warning" 
                : absence.absence 
                    ? "table-success"
                    : "";

    return (
        <td style={style} className={clsName}>

            {absence.absence !== "Ma" && 
                <span className = "absence"><sup><small>{absence.absence}</small></sup></span>
            }

            <span className = "job">{jobs && jobs.join(" ")}</span>

        </td>
    )
}

Day.prototype = {
    id: PropTypes.any,
    sunday: PropTypes.bool,
    jobs: PropTypes.array,
    absence: PropTypes.object
}

export default Day