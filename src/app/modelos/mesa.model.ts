export interface Mesa {
  llave: string;
  valor: string;
  valorOpcional?: string;
}

export class Mesa {
  constructor(llave: string) {
    this.llave = llave;
  }
}
