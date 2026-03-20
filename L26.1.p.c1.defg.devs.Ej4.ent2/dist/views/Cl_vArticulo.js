export default class Cl_vArticulo {
    inCosto;
    inCodigo;
    inVenta;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("articulo");
        this.inCodigo = document.getElementById("articulo_inCodigo");
        this.inCosto = document.getElementById("articulo_inCosto");
        this.inVenta = document.getElementById("articulo_inVenta");
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
        this.mostrar();
    }
    get codigo() {
        return +this.inCodigo.value;
    }
    get costo() {
        return +this.inCosto.value;
    }
    get venta() {
        return +this.inVenta.value;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vArticulo.js.map