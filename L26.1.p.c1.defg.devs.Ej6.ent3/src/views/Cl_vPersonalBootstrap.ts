import { I_vPersonal } from "../interfaces/I_vPersonal.js";
declare var bootstrap: any;

export default class Cl_vPersonalBootstrap implements I_vPersonal {
  private inNombre: HTMLInputElement;
  private inTipo: HTMLInputElement;
  private inSalario: HTMLInputElement;
  private inBono: HTMLInputElement;
  private inPeso: HTMLInputElement;                // <-- NUEVO
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private modal: any;

  constructor() {
    this.inNombre = document.getElementById("personal_inNombre") as HTMLInputElement;
    this.inTipo = document.getElementById("personal_inTipo") as HTMLInputElement;
    this.inSalario = document.getElementById("personal_inSalario") as HTMLInputElement;
    this.inBono = document.getElementById("personal_inBono") as HTMLInputElement;
    this.inPeso = document.getElementById("personal_inPeso") as HTMLInputElement; // <-- NUEVO
    this.btCancelar = document.getElementById("personal_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("personal_btAceptar") as HTMLButtonElement;
    const elementoModal = document.getElementById("personal");
    this.modal = new bootstrap.Modal(elementoModal);
  }

  get nombre(): string { return this.inNombre.value; }
  get tipo(): number { return +this.inTipo.value; }
  get salario(): number { return +this.inSalario.value; }
  get bono(): number { return +this.inBono.value; }
  get peso(): number { return +this.inPeso.value; }  // <-- Ahora lee del input

  onAceptar(callback: () => void): void { this.btAceptar.onclick = callback; }
  onCancelar(callback: () => void): void { this.btCancelar.onclick = callback; }

  mostrar(): void {
    this.inNombre.value = "";
    this.inTipo.value = "";
    this.inSalario.value = "";
    this.inBono.value = "0";
    this.inPeso.value = "0";                         // <-- Limpiar también peso
    this.modal.show();
  }

  ocultar(): void { this.modal.hide(); }
}