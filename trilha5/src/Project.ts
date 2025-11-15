import { TaskManager } from "./TaskManager";

export class Project extends TaskManager{

    addTask(task: string): void {
        if(this.tasks.includes(task)){
            console.log('[Project] Tarefa repetida ignorada com sucesso : ' + task);
            return;
        }

        this.tasks.push(task)
        console.log('[Project] Tarefa adicionada: ' + task);
    }

    listTasks(): string[] {
        return this.tasks;
    }
}