export interface ProdutoRepository {

    listarProdutos(): void;
    listarProdutoPeloId(numero: number): void;
    cadastrarProduto(): void;
    atualizarProduto(): void;
    deletarProduto(): void;
    
  }