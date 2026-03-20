export default class Cl_mArticulo {
  private _costo: number = 0;
  private _codigo: number = 0;
  private _venta: number = 0;
  private _peso: number = 0;                // <-- NUEVO

  constructor(
    { codigo, costo, venta, peso }:          // <-- Se agregó peso
    { codigo: number; costo: number; venta: number; peso: number } = {
      codigo: 0,
      costo: 0,
      venta: 0,
      peso: 0,                               // <-- NUEVO
    },
  ) {
    this.codigo = codigo;
    this.costo = costo;
    this.venta = venta;
    this.peso = peso;                         // <-- NUEVO
  }

  set costo(costo: number) {
    this._costo = +costo;
  }
  get costo(): number {
    return this._costo;
  }

  set codigo(codigo: number) {
    this._codigo = +codigo;
  }
  get codigo(): number {
    return this._codigo;
  }

  set venta(venta: number) {
    this._venta = +venta;
  }
  get venta(): number {
    return this._venta;
  }

  // NUEVO: getter y setter para peso
  set peso(peso: number) {
    this._peso = +peso;
  }
  get peso(): number {
    return this._peso;
  }

  get ganancia(): number {
    return this.venta - this.costo;
  }
}