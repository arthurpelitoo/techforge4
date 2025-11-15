import { TaskManager } from "./TaskManager";

export class DailyTasks extends TaskManager{
    
    public addTask(task: string): void {
        if(this.tasks.includes(task)){
            console.log('[Diaria] Tarefa repetida ignorada com sucesso : ' + task);
            return;
        }

        this.tasks.push(task)
        console.log('[Diaria] Tarefa adicionada: ' + task);
    }

    public listTasks(): string[] {
        return this.tasks;
    }
}