import { useState } from "react";
import NavBar from "./NavBar";
import { Assignment } from "../interface/Assignment";
import { makeAssignments } from "../utils";
import { AssignmentWithGrade } from "../interface/AssignmentWithGrade";

function GradeCalculator() {
    const periods = ["1A", "2A", "4A", "1B", "2B", "3B", "4B"]
    const [activePeriod, setActivePeriod] = useState<string>(periods[0])
    const [activeAssignments, setActiveAssignments] = useState<Assignment[]>(makeAssignments(activePeriod))
    const [assignmentsWithGrades, setAssignmentsWithGrades] = useState<AssignmentWithGrade[]>(makeAssignmentsWithGrades(activeAssignments))
    
    return <div>
        <NavBar boldedWord={"Grade Calculator"} />
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
    </div> 

        function textOnChange(event: React.ChangeEvent<HTMLInputElement>, index: number)
        {
            const value = Number(event.target.value);
            console.log(value)

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
            const regularGrades = [];
            let extraCreditGrade = 0;

            for(const assignment of assignmentsWithGrades)
            {
                //for each assignment, if it's a regular assignment, add it to the arr
                if(!assignment.assignment.isExtraCredit)
                {
                    regularGrades.push(assignment.grade);
                }

                //otherwise, add it to extra credit grade 
                else
                {
                    extraCreditGrade += assignment.grade / 100;
                }
            }

            const regularGrade = regularGrades.reduce((a, b) => a + b) / regularGrades.length
            return Math.floor(regularGrade + extraCreditGrade) 
        }
  }


  
  export default GradeCalculator;