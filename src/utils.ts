import { Assignment } from "./interface/Assignment";
import data from './data.json'

function makeAssignments(activePeriod: string): Assignment[]
{
    const assignments: Assignment[] = [];
    const assignmentsData: any = data["Classes"].find(tab => tab[activePeriod as keyof typeof tab]);
    const values: any[] = Object.values(assignmentsData)[0] as unknown as any[]

    function convertStringToDate(dateStr: string): Date {
        const [month, day, year] = dateStr.split('/').map(part => parseInt(part, 10));
        return new Date(year, month - 1, day);
    }
    
    for(const assignmentData of values)
    {
        let assignment: Assignment = {
            period: activePeriod,
            name: assignmentData.Name,
            link: assignmentData.Link,
            isAttendance: assignmentData["Is Attendance"],
            startDate: convertStringToDate(assignmentData["Start Date"]),
            dueDate: convertStringToDate(assignmentData["Due Date"])
        }

        assignments.push(assignment)
    }
    return assignments;
}

export {makeAssignments}