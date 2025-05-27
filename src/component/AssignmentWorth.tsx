"use client";
import assignmentStyle from '../css/assignmentWorth.module.css'
import { Link } from "react-router-dom";
import data from '../data.json'
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { Assignment } from '../interface/Assignment';
import { makeAssignments } from '../utils';
import LastUpdate from './LastUpdate';


const AssignmentWorth = () => {
    const periods = data["Periods"]
    const [activePeriod, setActivePeriod] = useState<string>(periods[0])
    const [activeAssignments, setActiveAssignments] = useState<Assignment[]>(makeAssignments(activePeriod))
    const [currentDate, setCurrentDate] = useState<Date>(getDate(Date.now()))
    
    useEffect(() => {
        setActiveAssignments(makeAssignments(activePeriod))
      }, [activePeriod]);

    return (
        <div>
            <NavBar boldedWord={"Assignment Worth"} />
            {/* <!-- Tab links --> */}
            <div className="tab">
                {periods.map(p => <button className="tab-links" onClick={() => {setActivePeriod(p)}}>{p}</button>)}
            </div>
            <h2>{`Period ${activePeriod}'s Assignments`}</h2>
            {/* <!-- Tab content --> */}
            {periods.map(p => (
                <div id={p} className="tab-content" style={{display: p == activePeriod ? "block" : "none"}}>
                    <table className={assignmentStyle.table}>
                            <tr>
                                <td><b>Name</b></td>
                                <td><b>Date Assigned</b></td>
                                <td><b>Due Date</b></td>
                               <td><b>Days Late</b></td>
                                <td><b>Best grade possible</b> <br /> <input
                                    type="date"
                                    id="start"
                                    value={currentDate.toISOString().split('T')[0]}
                                    onChange={(e) => setCurrentDate(new Date(e.target.value))}
                                    /></td>
                                    <td></td>
                            </tr>
                        {activeAssignments.filter(a => !a.isAttendance).map(a => <tr>
                                <td><Link to={a.link} target="_blank">{ <p>{a.name}</p>}</Link></td>
                                <td>{a.startDate.toLocaleDateString()}</td>
                                <td>{a.dueDate.toLocaleDateString()}</td>
                                <td>{getDaysLate(a["dueDate"])}</td>
                                <td>{getAssignmentWorth(a["dueDate"])}</td>
                                </tr>)}
                            
                    </table>
                </div>
            ))}
            <LastUpdate/>
        </div>


    );   

    function getDaysLate(assignmentDate: Date): number
    {
        //see how many days it's been since the assignment's due date
        const dayMilliseconds = 1000 * 60 * 60 * 24;
        const easternTime = 1000 * 60 * 60 * 5; //add 5 hours in order to account for easter time zone ()
        const assignmentCount = assignmentDate.getTime();
        const currentDateCount = currentDate.getTime() + easternTime;
        
        //if the due date is somehow before the assigned date, set the amount of days past to 0
        //otherwise get the amount of days have past
        const daysPastDate = currentDate <= assignmentDate ? 0 :  Math.floor((Math.abs(assignmentCount - currentDateCount)) / dayMilliseconds);

        return daysPastDate;
    }
    

    function getAssignmentWorth(assignmentDate: Date)
    {
        //no need to go above 20

        //if assignment is handed in after 05/30/2025, it is late and
        //no points will be awarded
        if (getDaysLate(assignmentDate) > 0)
            return "0%";

        return "100%"


        const maxDays = Math.min(getDaysLate(assignmentDate), 20)
        return `${100 - maxDays * 5}%`;

    }
    function getDate(milliseconds: number)
    {
        const date = new Date(milliseconds);
        return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    }
}



export default AssignmentWorth;