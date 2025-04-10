import { Assignment } from "./interface/Assignment";
import data from './data.json'

function makeAssignments(activePeriod: string): Assignment[]
{
    const assignments: Assignment[] = [];
    const assignmentIdObject: any = data["Classes"].find(tab => tab[activePeriod as keyof typeof tab]);
    const assignmentIds: string[] = Object.values(assignmentIdObject)[0] as unknown as string[]
    const assignmentObjects = data["Assignments"]
    for(const id of assignmentIds)
    {
        let assignmentData = assignmentObjects.find(a => a.ID == id) as any;
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

//used to get the string of the id of an assignment in data.json
function generateRandomString(length: number = 26) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
  
    console.log(result)
  }

  function convertStringToDate(dateStr: string): Date {
    const [month, day, year] = dateStr.split('/').map(part => parseInt(part, 10));
    return new Date(year, month - 1, day);
}

generateRandomString()
export {makeAssignments}