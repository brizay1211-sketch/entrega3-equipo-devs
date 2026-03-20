export default class Cl_vPersonalPlain {
    inNombre;
    inTipo;
    inSalario;
    inBono;
    inPeso;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("personal");
        this.inNombre = document.getElementById("personal_inNombre");
        this.inTipo = document.getElementById("personal_inTipo");
        this.inSalario = document.getElementById("personal_inSalario");
        this.inBono = document.getElementById("personal_inBono");
        this.inPeso = document.getElementById("personal_inPeso");
        this.btCancelar = document.getElementById("personal_btCancelar");
        this.btAceptar = document.getElementById("personal_btAceptar");
    }
    get nombre() { return this.inNombre.value; }
    get tipo() { return +this.inTipo.value; }
    get salario() { return +this.inSalario.value; }
    get bono() { return +this.inBono.value; }
    get peso() { return +this.inPeso.value; }
    onAceptar(callback) { this.btAceptar.onclick = callback; }
    onCancelar(callback) { this.btCancelar.onclick = callback; }
    mostrar() {
        this.inNombre.value = "";
        this.inTipo.value = "";
        this.inSalario.value = "";
        this.inBono.value = "0";
        this.inPeso.value = "0";
        this.vista.hidden = false;
    }
    ocultar() { this.vista.hidden = true; }
}
//# sourceMappingURL=Cl_vPersonalPlain.js.map