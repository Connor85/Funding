export class Project {
    constructor(public name: string, public details: string, public postedBy: string, public fundingGoal: number) { }
    public moneyRaised: number = 0;
}
