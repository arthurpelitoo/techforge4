"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const TaskManager_1 = require("./TaskManager");
class Project extends TaskManager_1.TaskManager {
    addTask(task) {
        if (this.tasks.includes(task)) {
            console.log('[Project] Tarefa repetida ignorada com sucesso : ' + task);
            return;
        }
        this.tasks.push(task);
        console.log('[Project] Tarefa adicionada: ' + task);
    }
    listTasks() {
        return this.tasks;
    }
}
exports.Project = Project;
