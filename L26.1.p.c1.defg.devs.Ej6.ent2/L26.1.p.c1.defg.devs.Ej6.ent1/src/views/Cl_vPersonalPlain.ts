import { I_vPersonal } from "../interfaces/I_vPersonal.js";

export default class Cl_vPersonalPlain implements I_vPersonal {
  private inNombre: HTMLInputElement;
  private inTipo: HTMLInputElement;
  private inSalario: HTMLInputElement;
  private inBono: HTMLInputElement;
  private inPeso: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("personal") as HTMLElement;
    this.inNombre = document.getElementById("personal_inNombre") as HTMLInputElement;
    this.inTipo = document.getElementById("personal_inTipo") as HTMLInputElement;
    this.inSalario = document.getElementById("personal_inSalario") as HTMLInputElement;
    this.inBono = document.getElementById("personal_inBono") as HTMLInputElement;
    this.inPeso = document.getElementById("personal_inPeso") as HTMLInputElement;
    this.btCancelar = document.getElementById("personal_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("personal_btAceptar") as HTMLButtonElement;
  }

  get nombre(): string { return this.inNombre.value; }
  get tipo(): number { return +this.inTipo.value; }
  get salario(): number { return +this.inSalario.value; }
  get bono(): number { return +this.inBono.value; }
  get peso(): number { return +this.inPeso.value; }

  onAceptar(callback: () => void): void { this.btAceptar.onclick = callback; }
  onCancelar(callback: () => void): void { this.btCancelar.onclick = callback; }

  mostrar(): void {
    this.inNombre.value = "";
    this.inTipo.value = "";
    this.inSalario.value = "";
    this.inBono.value = "0";
    this.vista.hidden = false;
  }

  ocultar(): void { this.vista.hidden = true; }
}