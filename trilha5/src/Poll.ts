import { VoteSystem } from "./VoteSystem";

export class Poll extends VoteSystem{
    public voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`Candidato '${candidate}' recebeu 1 voto! Total de votos nele: '${this.votes[candidate]}'`)
    }

    public getResults(): object {
        const candidates = Object.keys(this.votes);

        const sortedCandidates = [...candidates.sort((a,b) => {
            return this.votes[b] - this.votes[a];
        })]

        return sortedCandidates;
    }
}