export default class Cl_vPersonal {
    inTipo;
    inNombre;
    inSalario;
    inBono; // antes se llamaba Bono
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("personal");
        this.inNombre = document.getElementById("personal_inNombre");
        this.inTipo = document.getElementById("personal_inTipo");
        this.inSalario = document.getElementById("personal_inSalario");
        this.inBono = document.getElementById("personal_inBono");
        this.btCancelar = document.getElementById("personal_btCancelar");
        this.btAceptar = document.getElementById("personal_btAceptar");
        this.mostrar();
    }
    get nombre() {
        return this.inNombre.value;
    }
    get tipo() {
        return +this.inTipo.value;
    }
    get salario() {
        return +this.inSalario.value;
    }
    get bono() {
        return +this.inBono.value;
    }
    mostrar() {
        if (this.vista)
            this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista)
            this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vPersonal.js.map