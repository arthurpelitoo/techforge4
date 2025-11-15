"use strict";
// import { DailyTasks } from "./DailyTasks";
// import { Project } from "./Project";
Object.defineProperty(exports, "__esModule", { value: true });
const Election_1 = require("./Election");
const Poll_1 = require("./Poll");
// import { StoreInventory } from "./StoreInventory";
// import { WarehouseInventory } from "./WarehouseInventory";
// const meuProjeto = new Project();
// const tarefasDiarias = new DailyTasks();
// console.log("\n--- Gerenciando Projeto ---");
// meuProjeto.addTask("Definir escopo");
// meuProjeto.addTask("Revisar layout do projeto");
// meuProjeto.addTask("Definir escopo");
// console.log("\n--- Gerenciando Tarefas Diárias ---");
// tarefasDiarias.addTask("Responder e-mails");
// tarefasDiarias.addTask("Revisar e-mails");
// tarefasDiarias.addTask("Responder e-mails"); 
// console.log("\n--- Lista Final de Tarefas ---");
// console.log("Projeto:", meuProjeto.listTasks()); 
// console.log("Diárias:", tarefasDiarias.listTasks());
// const armazem = new WarehouseInventory();
// const loja = new StoreInventory();
// // Teste do Armazém (sem limite)
// armazem.addItem("Martelo", 50);
// armazem.addItem("Martelo", 10); // Adiciona mais
// armazem.removeItem("Martelo"); 
// console.log("Inventário Armazém:", armazem.getInventory()); // Saída: {} (Martelo foi removido)
// // Teste da Loja (com limite de 10)
// loja.addItem("Bateria AA", 7);
// loja.addItem("Bateria AA", 4); // Vai tentar adicionar 4, mas o limite é 10 (7+4 = 11)
// console.log("Inventário Loja:", loja.getInventory()); 
// // Saída esperada: { 'Bateria AA': 10 }
// const filmes = new MoviesFavoriteManager();
// const livros = new BooksFavoriteManager();
// filmes.addFavorite("Matrix");
// filmes.addFavorite("A Origem");
// filmes.addFavorite("Interestelar");
// filmes.addFavorite("Matrix"); // Duplicata
// livros.addFavorite("1984");
// livros.addFavorite("O Guia do Mochileiro");
// livros.addFavorite("Duna"); // Deve ser inserido primeiro
// console.log("Filmes:", filmes.getFavorites());
// // Saída esperada: ["A Origem", "Interestelar", "Matrix"]
// console.log("Livros:", livros.getFavorites());
// // Saída esperada: ["Duna", "O Guia do Mochileiro", "1984"]
// console.log("----------------------------------------\n");
const eleicao = new Election_1.Election();
const enquete = new Poll_1.Poll();
eleicao.voteFor("Candidato X");
eleicao.voteFor("Candidato Y");
eleicao.voteFor("Candidato X");
enquete.voteFor("Tema A"); // 1
enquete.voteFor("Tema B"); // 1
enquete.voteFor("Tema A"); // 2
enquete.voteFor("Tema C"); // 1
enquete.voteFor("Tema A"); // 3
console.log("Eleição:", eleicao.getResults());
// Saída esperada: { 'Candidato X': 2, 'Candidato Y': 1 }
console.log("Enquete:", enquete.getResults());
// Saída esperada: ["Tema A", "Tema B", "Tema C"] (ou vice-versa, se B e C empatarem, o 'sort' mantém a ordem relativa)
console.log("----------------------------------------");
