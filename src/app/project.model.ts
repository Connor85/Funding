export class Project {
    constructor(public name: string, public details: string, public postedBy: string, public fundingGoal: number, public id: number) { }
    public moneyRaised: number = 0;
}
