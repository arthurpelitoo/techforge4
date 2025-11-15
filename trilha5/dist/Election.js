"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Election = void 0;
const VoteSystem_1 = require("./VoteSystem");
class Election extends VoteSystem_1.VoteSystem {
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`Candidato '${candidate}' recebeu 1 voto! Total de votos nele: '${this.votes[candidate]}'`);
    }
    getResults() {
        return this.votes;
    }
}
exports.Election = Election;
