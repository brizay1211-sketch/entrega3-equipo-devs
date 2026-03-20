export default class Cl_vArticulo {
    inCodigo;
    inCosto;
    inVenta;
    inPeso; // <-- NUEVO
    btCancelar;
    btAceptar;
    contenedor;
    constructor() {
        this.inCodigo = document.getElementById("articulo_inCodigo");
        this.inCosto = document.getElementById("articulo_inCosto");
        this.inVenta = document.getElementById("articulo_inVenta");
        this.inPeso = document.getElementById("articulo_inPeso"); // <-- NUEVO (ID corregido en HTML)
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
        this.contenedor = document.getElementById("contenedorArticulo");
    }
    mostrar() {
        this.contenedor.style.display = "block";
        this.limpiar();
    }
    ocultar() {
        this.contenedor.style.display = "none";
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    limpiar() {
        this.inCodigo.value = "";
        this.inCosto.value = "";
        this.inVenta.value = "";
        this.inPeso.value = ""; // <-- NUEVO
    }
    get codigo() {
        return this.inCodigo.value;
    }
    get costo() {
        return parseFloat(this.inCosto.value) || 0;
    }
    get venta() {
        return parseFloat(this.inVenta.value) || 0;
    }
    // NUEVO: getter para peso
    get peso() {
        return parseFloat(this.inPeso.value) || 0;
    }
}
//# sourceMappingURL=Cl_iArticulo.js.map