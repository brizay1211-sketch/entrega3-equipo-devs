import Cl_mArticulo from "../models/Cl_mArticulo.js";
import { Cl_iArticulo } from "../interfaces/Cl_iArticulo.js";

export default class Cl_cArticulo {
  private vista: Cl_iArticulo;
  private callback!: (articulo: Cl_mArticulo | null) => void;

  constructor(vista: Cl_iArticulo) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarArticulo(callback: (articulo: Cl_mArticulo | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick(): void {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick(): void {
    this.callback(
      new Cl_mArticulo({
        codigo: parseInt(this.vista.codigo) || 0,
        costo: this.vista.costo,
        venta: this.vista.venta,
        peso: this.vista.peso,          // Nuevo campo
      }),
    );
    this.vista.ocultar();
  }
}