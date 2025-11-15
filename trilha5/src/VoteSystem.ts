

export abstract class VoteSystem {
    protected votes: Record<string, number> = {}; 

    public abstract voteFor(candidate: string): void;
    public abstract getResults(): object;
}