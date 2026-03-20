import Cl_mPersonal from "../models/Cl_mPersonal.js";
import { I_vPersonal } from "../interfaces/I_vPersonal.js";

export default class Cl_cPersonal {
  private vista: I_vPersonal;
  private callback!: (personal: Cl_mPersonal | null) => void;

  constructor(vista: I_vPersonal) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarPersonal(callback: (personal: Cl_mPersonal | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    this.callback(
      new Cl_mPersonal({
        nombre: this.vista.nombre,
        tipo: this.vista.tipo,
        salario: this.vista.salario,
        bono: this.vista.bono,
        peso: this.vista.peso,
      })
    );
    this.vista.ocultar();
  }
}