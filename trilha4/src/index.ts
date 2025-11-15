// import { Texto } from "./Texto";
// import { Loja } from "./Loja";
// import { Biblioteca } from "./Biblioteca";

import { BibliotecaGestao } from "./BibliotecaGestao";




// // 1. Cria a instância
// let meuTexto = new Texto("Relatório Anual", "Os resultados foram positivos");

// // 2. Chama o método de exibição para usar o retorno
// console.log(meuTexto.exibir());

// // Saída esperada: Título: [Relatório Anual], Conteúdo: [Os resultados foram positivos.].








// // Criando alguns produtos que respeitam a interface ProdutoLoja
// const prod1 = { codigo: 101, nome: "Smartphone X" };
// const prod2 = { codigo: 205, nome: "Notebook Y" };
// const prod3 = { codigo: 300, nome: "Carregador" };

// // Inicializando a loja com o array de produtos
// const minhaLoja = new Loja([prod1, prod2, prod3]);

// // Teste 1: Buscar um produto que existe
// const resultado1 = minhaLoja.buscarProdutoPorCodigo(205);
// console.log(resultado1); 
// // Saída: { codigo: 205, nome: 'Notebook Y' }

// // Teste 2: Buscar um produto que não existe
// const resultado2 = minhaLoja.buscarProdutoPorCodigo(999);
// console.log(resultado2); 
// // Saída: undefined






// const livroA = { titulo: "A Arte da Guerra", autor: "Sun Tzu", disponivel: true };
// const livroB = { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: false }; // Indisponível
// const livroC = { titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true };

// const catalogo = [livroA, livroB, livroC];

// const minhaBiblioteca = new Biblioteca(catalogo);

// const disponiveis = minhaBiblioteca.buscarLivrosDisponiveis();

// console.log(disponiveis);










// const livroA = { titulo: "A Arte da Guerra", autor: "Sun Tzu", genero: "FODA", disponivel: true };
// const livroB = { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "FODA", disponivel: false }; // Indisponível
// const livroC = { titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "NAO LI mas usam pra pagar de cult", disponivel: true };
// const livroD = { titulo: "Bom Samaritano", autor: "desconhecido", genero: "esse cara nao existe", disponivel: true }; 
// const catalogo = [livroA, livroB, livroC, livroD];

// const minhaBiblioteca = new BibliotecaGestao(catalogo);

// const disponiveis = minhaBiblioteca.obterLivrosDisponiveisOrdenados();

// console.log(disponiveis);


