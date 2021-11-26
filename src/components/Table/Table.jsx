import React from "react"
import PropTypes from 'prop-types';
import UserLine from "../UserLine/UserLine"

const Table = ({jobs, absences, allUsers}) => {
    
    const users = [];
    if (allUsers) {
        users.push(...allUsers);
    } else {
        jobs.map(({user}) => {
            if (!users.includes(user)) users.push(user)
            return null
        })
        absences.map(({user}) => {
            if (!users.includes(user)) users.push(user)
            return null
        })
    }

    const rows = []
    users.map((user) => {
        const events = jobs.filter((event) => event.user === user)
        const abs = absences.filter((a) => a.user === user)
        rows.push(<UserLine key={user.toString()} user={user} events={events} absences={abs}/>)
        return null;
    })
    
    return (
        <div className="table-responsive">
            <table className="table  table-bordered">
                <thead>
                    <tr className="table-light">
                        <th>Users</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>WE</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}

Table.prototype = {
    jobs: PropTypes.array.isRequired,
    absences: PropTypes.array.isRequired,
    allUsers: PropTypes.array
}

export default Table