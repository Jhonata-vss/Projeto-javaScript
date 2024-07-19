import { Produto } from "./Produto";

export class PCsGamers extends Produto {
  static listarProdutoPeloId(id: number) {
    throw new Error("Method not implemented.");
  }
  private _marca: string;

  constructor(numeroID: number, nome: string, id: number, marca: string) {
    super(numeroID, nome, id);
    this._marca = marca;
  }

  public get marca(): string {
    return this._marca;
  }

  public set marca(value: string) {
    this._marca = value;
  }
}