import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Assignment } from "../interface/Assignment";
import { makeAssignments } from "../utils";
import { AssignmentWithGrade } from "../interface/AssignmentWithGrade";
import data from '../data.json'
import LastUpdate from "./LastUpdate";

function GradeCalculator() {
    const periods = data["Periods"]
    const [activePeriod, setActivePeriod] = useState<string>(periods[0])
    const [activeAssignments, setActiveAssignments] = useState<Assignment[]>(makeAssignments(activePeriod))
    const [assignmentsWithGrades, setAssignmentsWithGrades] = useState<AssignmentWithGrade[]>(makeAssignmentsWithGrades(activeAssignments))
    
    useEffect(() => {
        const newActiveAssignments = makeAssignments(activePeriod)
        setActiveAssignments(newActiveAssignments)
        setAssignmentsWithGrades(makeAssignmentsWithGrades(newActiveAssignments))
    }, [activePeriod]);
          
    return <div>
            <NavBar boldedWord={"Grade Calculator"} />
            <div className="tab">
                {periods.map(p => <button className="tab-links" onClick={() => {setActivePeriod(p)}}>{p}</button>)}
            </div>
            <h2>{`Period ${activePeriod}'s Assignments`}</h2>
            <table>
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Grade Earned</b></td>
                </tr>
                {assignmentsWithGrades.map((a, index) => 
                <tr>
                    <td>{a.assignment.name}</td>
                    <td><input type="number" min="0" max="100" value={a.grade} onChange={(event) => textOnChange(event, index)} /></td>
                </tr>)
                }
                
                <tr>
                    <td><b>Total Grade</b></td>
                    <td><p>{calculateGrade()}%</p></td>
                </tr>
            </table>
            <LastUpdate/>
    </div> 

        function textOnChange(event: React.ChangeEvent<HTMLInputElement>, index: number)
        {
            const value = Number(event.target.value);
            const newAssignmentsWithGrades: AssignmentWithGrade[] = []
            for(let i = 0; i < assignmentsWithGrades.length; i++)
            {
                let a: AssignmentWithGrade = assignmentsWithGrades[i];
                if(i == index)
                {
                    a.grade = value;
                }

                newAssignmentsWithGrades.push(a)
            }
            setAssignmentsWithGrades(newAssignmentsWithGrades)
        }
        function makeAssignmentsWithGrades(assignments: Assignment[]): AssignmentWithGrade[]
        {
            return assignments.map(a => ({ assignment: a, grade: 0 }));
        }

        function calculateGrade(): number
        {
            
            const assignmentGrades: number[] = [];
            const attendanceGrades: number[] = [];

            for(const assignment of assignmentsWithGrades)
            {
                //for each assignment, add it to the correct array
                if(assignment.assignment.isAttendance)
                {
                    attendanceGrades.push(assignment.grade);
                }
                
                else
                {
                    assignmentGrades.push(assignment.grade);
                }
            }

            const avg = (arr: number[]) => { return arr.length == 0 ? 0 :  arr.reduce((a, b) => a + b) / arr.length }

            //get the average grade for attendance and assignments.
            const assignmentGrade = avg(assignmentGrades);
            const attendanceGrade = avg(attendanceGrades);
            //Scale to the appropriate number (20% and 80%)
            return  Math.floor(assignmentGrade * .8 + attendanceGrade * .2);
        }
  }


  
  export default GradeCalculator;