interface Assignment {
    period: string
    name: string,
    isExtraCredit: boolean,
    extraCreditWorth: number,
    startDate: Date
    dueDate: Date
}

export type { Assignment }