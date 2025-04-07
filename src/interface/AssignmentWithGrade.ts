import { Assignment } from "./Assignment";

interface AssignmentWithGrade {
    assignment: Assignment
    grade: number,
    exempted: boolean
}

export type { AssignmentWithGrade }