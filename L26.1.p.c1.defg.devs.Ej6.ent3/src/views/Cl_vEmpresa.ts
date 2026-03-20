import { Cl_iEmpresa } from "../interfaces/Cl_iEmpresa.js";
import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import Cl_mArticulo from "../models/Cl_mArticulo.js";

export default class Cl_vEmpresa implements Cl_iEmpresa {
  btProcesar1Articulo: HTMLButtonElement;
  contenedor: HTMLElement;
  inCodigo: HTMLInputElement;
  inCosto: HTMLInputElement;
  inVenta: HTMLInputElement;
  inGanancia: HTMLInputElement;
  inTotalGanancia: HTMLInputElement;
  inCantidadArticulos: HTMLInputElement;
  inArticuloMasCaro: HTMLInputElement;
  inPromedioPeso: HTMLInputElement;               // <-- NUEVO

  constructor() {
    this.btProcesar1Articulo = document.getElementById("empresa_btProcesar1Articulo") as HTMLButtonElement;
    this.contenedor = document.getElementById("contenedorEmpresa") as HTMLElement;

    this.inCodigo = document.getElementById("empresa_inCodigo") as HTMLInputElement;
    this.inCosto = document.getElementById("empresa_inCosto") as HTMLInputElement;
    this.inVenta = document.getElementById("empresa_inVenta") as HTMLInputElement;
    this.inGanancia = document.getElementById("empresa_inGanancia") as HTMLInputElement;

    this.inTotalGanancia = document.getElementById("empresa_inTotalGanancia") as HTMLInputElement;
    this.inCantidadArticulos = document.getElementById("empresa_inCantidadArticulos") as HTMLInputElement;
    this.inArticuloMasCaro = document.getElementById("empresa_inArticuloMasCaro") as HTMLInputElement;
    this.inPromedioPeso = document.getElementById("empresa_inPromedioPeso") as HTMLInputElement; // <-- NUEVO
  }

  onProcesar1Articulo(callback: () => void): void {
    this.btProcesar1Articulo.onclick = callback;
  }

  reportar(datos: { empresa: Cl_mEmpresa; articulo: Cl_mArticulo }): void {
    this.inCodigo.value = datos.articulo.codigo.toString();
    this.inCosto.value = datos.articulo.costo.toFixed(2);
    this.inVenta.value = datos.articulo.venta.toFixed(2);
    this.inGanancia.value = datos.articulo.ganancia.toFixed(2);

    this.inTotalGanancia.value = datos.empresa.totalGanancia.toFixed(2);
    this.inCantidadArticulos.value = datos.empresa.cantidadArticulos.toString();
    this.inArticuloMasCaro.value = datos.empresa.articuloMayorPrecioventa;
    this.inPromedioPeso.value = datos.empresa.promedioPeso.toFixed(2);   // <-- NUEVO
  }

  mostrar(): void {
    this.contenedor.style.display = "block";
  }

  ocultar(): void {
    this.contenedor.style.display = "none";
  }
}