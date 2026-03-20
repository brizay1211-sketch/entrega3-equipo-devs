export default class Cl_vPersonalBootstrap {
    inNombre;
    inTipo;
    inSalario;
    inBono;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("personal_inNombre");
        this.inTipo = document.getElementById("personal_inTipo");
        this.inSalario = document.getElementById("personal_inSalario");
        this.inBono = document.getElementById("personal_inBono");
        this.btCancelar = document.getElementById("personal_btCancelar");
        this.btAceptar = document.getElementById("personal_btAceptar");
        const elementoModal = document.getElementById("personal");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    _peso;
    get peso() {
        return this._peso;
    }
    set peso(value) {
        this._peso = value;
    }
    get nombre() { return this.inNombre.value; }
    get tipo() { return +this.inTipo.value; }
    get salario() { return +this.inSalario.value; }
    get bono() { return +this.inBono.value; }
    onAceptar(callback) { this.btAceptar.onclick = callback; }
    onCancelar(callback) { this.btCancelar.onclick = callback; }
    mostrar() {
        this.inNombre.value = "";
        this.inTipo.value = "";
        this.inSalario.value = "";
        this.inBono.value = "0";
        this.modal.show();
    }
    ocultar() { this.modal.hide(); }
}
//# sourceMappingURL=Cl_vPersonalBootstrap.js.map