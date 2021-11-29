import React from "react"
import PropTypes from 'prop-types';
import Week from "../Week/Week"


const Table = ({tasks, jobs, absences, allUsers, showAllUsers}) => {

    const formatUsersList = () => {
        const _users = [];
        if (allUsers && allUsers.length > 0) _users.push(...allUsers);
        jobs.map(({user}) => (!_users.includes(user)) && _users.push(user))
        tasks.map(({user}) => (!_users.includes(user)) && _users.push(user))
        absences.map(({user}) => (!_users.includes(user)) && _users.push(user))
        return _users;
    }

    
    const users = formatUsersList();
    
    const buildTable = () => {
        const rows = []
        users.forEach((user) => {
            const jbs = jobs.filter((j) => j.user.id === user.id)
            const tsks = tasks.filter((t) => t.user.id === user.id)
            const abs = absences.filter((a) => a.user.id === user.id)
            const key = "week_user_id_" + user.id.toString();
            (showAllUsers || tsks.length > 0 || jbs.length > 0) && rows.push(<Week key={key} user={user} tasks={tsks} jobs={jbs} absences={abs}/>)
        })
        return rows;
    }
    
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
                <tbody>{buildTable()}</tbody>
            </table>
        </div>
    )
}

Table.prototype = {
    showAllUsers: PropTypes.bool,
    jobs: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired,
    absences: PropTypes.array.isRequired,
    allUsers: PropTypes.array
}

export default Table