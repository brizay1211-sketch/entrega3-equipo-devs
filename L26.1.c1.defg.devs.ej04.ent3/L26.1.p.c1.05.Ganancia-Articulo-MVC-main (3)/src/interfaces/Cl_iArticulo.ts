export interface Cl_iArticulo {
  codigo: string;
  costo: number;
  venta: number;
  peso: number;                     // Propiedad agregada

  mostrar(): void;
  ocultar(): void;

  onCancelar(callback: () => void): void;
  onAceptar(callback: () => void): void;
}export default class Cl_vArticulo implements Cl_iArticulo {
  inCodigo: HTMLInputElement;
  inCosto: HTMLInputElement;
  inVenta: HTMLInputElement;
  inPeso: HTMLInputElement;          // <-- NUEVO
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  contenedor: HTMLElement;

  constructor() {
    this.inCodigo = document.getElementById("articulo_inCodigo") as HTMLInputElement;
    this.inCosto = document.getElementById("articulo_inCosto") as HTMLInputElement;
    this.inVenta = document.getElementById("articulo_inVenta") as HTMLInputElement;
    this.inPeso = document.getElementById("articulo_inPeso") as HTMLInputElement;   // <-- NUEVO (ID corregido en HTML)
    this.btCancelar = document.getElementById("articulo_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("articulo_btAceptar") as HTMLButtonElement;
    this.contenedor = document.getElementById("contenedorArticulo") as HTMLElement;
  }

  mostrar(): void {
    this.contenedor.style.display = "block";
    this.limpiar();
  }

  ocultar(): void {
    this.contenedor.style.display = "none";
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  private limpiar(): void {
    this.inCodigo.value = "";
    this.inCosto.value = "";
    this.inVenta.value = "";
    this.inPeso.value = "";           // <-- NUEVO
  }

  get codigo(): string {
    return this.inCodigo.value;
  }

  get costo(): number {
    return parseFloat(this.inCosto.value) || 0;
  }

  get venta(): number {
    return parseFloat(this.inVenta.value) || 0;
  }

  // NUEVO: getter para peso
  get peso(): number {
    return parseFloat(this.inPeso.value) || 0;
  }
}