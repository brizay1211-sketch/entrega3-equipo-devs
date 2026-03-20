export default class Cl_mPersonal {
  private _nombre: string = "";
  private _tipo: number = 0;
  private _salarioBase: number = 0;   // antes _salario
  private _bono: number = 0;

  constructor(
    { nombre, tipo, salario, bono }: { nombre: string; tipo: number; salario: number; bono: number } = {
      nombre: "",
      tipo: 0,
      salario: 0,
      bono: 0,
    }
  ) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.salarioBase = salario;
    this.bono = bono;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre(): string {
    return this._nombre;
  }

  set tipo(tipo: number) {
    this._tipo = +tipo;
  }
  get tipo(): number {
    return this._tipo;
  }

  set salarioBase(salario: number) {
    this._salarioBase = +salario;
  }
  get salarioBase(): number {
    return this._salarioBase;
  }

  set bono(bono: number) {
    this._bono = +bono;
  }
  get bono(): number {
    return this._bono;
  }

  // Salario total (base + bono)
  get salarioTotal(): number {
    return this.salarioBase + this.bono;
  }
}