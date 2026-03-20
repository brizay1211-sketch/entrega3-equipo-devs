import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_mEmpresa {
  private acGanancia: number = 0;
  private acCosto: number = 0;
  private cntArticulos: number = 0;
  private acPeso: number = 0;                // <-- NUEVO acumulador de peso
  mayPrecio: number = 0;
  nombreMayPrecio: string = "";

  procesarArticulo(a: Cl_mArticulo): void {
    this.acGanancia += a.ganancia;
    this.acCosto += a.costo;
    this.acPeso += a.peso;                   // <-- NUEVO
    this.cntArticulos++;

    if (a.venta > this.mayPrecio) {
      this.mayPrecio = a.venta;
      this.nombreMayPrecio = a.codigo.toString();
    }
  }

  get totalGanancia(): number {
    return this.acGanancia;
  }

  get cantidadArticulos(): number {
    return this.cntArticulos;
  }

  get articuloMayorPrecioventa(): string {
    return this.nombreMayPrecio;
  }

  get totalprocesados(): number {
    return this.cntArticulos;
  }

  get promediocosto(): number {
    return this.acCosto / this.cntArticulos;
  }

  // NUEVO: promedio de peso
  get promedioPeso(): number {
    return this.cntArticulos > 0 ? this.acPeso / this.cntArticulos : 0;
  }
}