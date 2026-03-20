export default class Cl_vPersonal {
  inTipo: HTMLInputElement;
  inNombre: HTMLInputElement;
  inSalario: HTMLInputElement;
  inBono: HTMLInputElement;      // antes se llamaba Bono
  btCancelar: any;
  btAceptar: any;
  vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("personal") as HTMLElement;
    this.inNombre = document.getElementById("personal_inNombre") as HTMLInputElement;
    this.inTipo = document.getElementById("personal_inTipo") as HTMLInputElement;
    this.inSalario = document.getElementById("personal_inSalario") as HTMLInputElement;
    this.inBono = document.getElementById("personal_inBono") as HTMLInputElement;
    this.btCancelar = document.getElementById("personal_btCancelar");
    this.btAceptar = document.getElementById("personal_btAceptar");
    this.mostrar();
  }

  get nombre(): string {
    return this.inNombre.value;
  }

  get tipo(): number {
    return +this.inTipo.value;
  }

  get salario(): number {
    return +this.inSalario.value;
  }

  get bono(): number {
    return +this.inBono.value;
  }

  mostrar(): void {
    if (this.vista) this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}