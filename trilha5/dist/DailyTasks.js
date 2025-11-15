"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyTasks = void 0;
const TaskManager_1 = require("./TaskManager");
class DailyTasks extends TaskManager_1.TaskManager {
    addTask(task) {
        if (this.tasks.includes(task)) {
            console.log('[Diaria] Tarefa repetida ignorada com sucesso : ' + task);
            return;
        }
        this.tasks.push(task);
        console.log('[Diaria] Tarefa adicionada: ' + task);
    }
    listTasks() {
        return this.tasks;
    }
}
exports.DailyTasks = DailyTasks;
