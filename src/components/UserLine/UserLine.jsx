import React from "react"
import PropTypes from 'prop-types';
import Week from "../Week/Week"


const UserLine = ({user, events, absences}) => {
    return (
        <tr key={"_" + user + "_"}>
            <td key={"_" + user + "_name" }>{user}</td>
            <Week events={events} absences={absences}/>
        </tr>
    )
}

UserLine.prototype = {
    user: PropTypes.string.isRequired,
    events: PropTypes.array,
    absences: PropTypes.array
}

export default UserLine