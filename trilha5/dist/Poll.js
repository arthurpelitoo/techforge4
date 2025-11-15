"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poll = void 0;
const VoteSystem_1 = require("./VoteSystem");
class Poll extends VoteSystem_1.VoteSystem {
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`Candidato '${candidate}' recebeu 1 voto! Total de votos nele: '${this.votes[candidate]}'`);
    }
    getResults() {
        const candidates = Object.keys(this.votes);
        const sortedCandidates = [...candidates.sort((a, b) => {
                return this.votes[b] - this.votes[a];
            })];
        return sortedCandidates;
    }
}
exports.Poll = Poll;
