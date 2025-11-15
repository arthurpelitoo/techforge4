
export abstract class TaskManager {

    protected tasks: string[] = [];

    public abstract addTask(task:string):void 

    public abstract listTasks(): string[]

}