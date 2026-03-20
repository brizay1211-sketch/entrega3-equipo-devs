export default class Cl_vPersonalBootstrap {
    inNombre;
    inTipo;
    inSalario;
    inBono;
    inPeso; // <-- NUEVO
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("personal_inNombre");
        this.inTipo = document.getElementById("personal_inTipo");
        this.inSalario = document.getElementById("personal_inSalario");
        this.inBono = document.getElementById("personal_inBono");
        this.inPeso = document.getElementById("personal_inPeso"); // <-- NUEVO
        this.btCancelar = document.getElementById("personal_btCancelar");
        this.btAceptar = document.getElementById("personal_btAceptar");
        const elementoModal = document.getElementById("personal");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get nombre() { return this.inNombre.value; }
    get tipo() { return +this.inTipo.value; }
    get salario() { return +this.inSalario.value; }
    get bono() { return +this.inBono.value; }
    get peso() { return +this.inPeso.value; } // <-- Ahora lee del input
    onAceptar(callback) { this.btAceptar.onclick = callback; }
    onCancelar(callback) { this.btCancelar.onclick = callback; }
    mostrar() {
        this.inNombre.value = "";
        this.inTipo.value = "";
        this.inSalario.value = "";
        this.inBono.value = "0";
        this.inPeso.value = "0"; // <-- Limpiar también peso
        this.modal.show();
    }
    ocultar() { this.modal.hide(); }
}
//# sourceMappingURL=Cl_vPersonalBootstrap.js.map