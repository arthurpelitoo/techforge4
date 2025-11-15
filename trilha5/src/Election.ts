import { VoteSystem } from "./VoteSystem";

export class Election extends VoteSystem{
    public voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`Candidato '${candidate}' recebeu 1 voto! Total de votos nele: '${this.votes[candidate]}'`)
    }

    public getResults(): object {
        return this.votes;
    }
}