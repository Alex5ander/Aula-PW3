import { Produto } from './produto';
export interface Categoria {
  idCategoria: string;
  nome: string;
  produtos: Produto[];
}
