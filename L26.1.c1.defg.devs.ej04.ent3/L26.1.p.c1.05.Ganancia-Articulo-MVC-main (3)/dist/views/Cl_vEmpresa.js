export default class Cl_vEmpresa {
    btProcesar1Articulo;
    contenedor;
    inCodigo;
    inCosto;
    inVenta;
    inGanancia;
    inTotalGanancia;
    inCantidadArticulos;
    inArticuloMasCaro;
    inPromedioPeso; // <-- NUEVO
    constructor() {
        this.btProcesar1Articulo = document.getElementById("empresa_btProcesar1Articulo");
        this.contenedor = document.getElementById("contenedorEmpresa");
        this.inCodigo = document.getElementById("empresa_inCodigo");
        this.inCosto = document.getElementById("empresa_inCosto");
        this.inVenta = document.getElementById("empresa_inVenta");
        this.inGanancia = document.getElementById("empresa_inGanancia");
        this.inTotalGanancia = document.getElementById("empresa_inTotalGanancia");
        this.inCantidadArticulos = document.getElementById("empresa_inCantidadArticulos");
        this.inArticuloMasCaro = document.getElementById("empresa_inArticuloMasCaro");
        this.inPromedioPeso = document.getElementById("empresa_inPromedioPeso"); // <-- NUEVO
    }
    onProcesar1Articulo(callback) {
        this.btProcesar1Articulo.onclick = callback;
    }
    reportar(datos) {
        this.inCodigo.value = datos.articulo.codigo.toString();
        this.inCosto.value = datos.articulo.costo.toFixed(2);
        this.inVenta.value = datos.articulo.venta.toFixed(2);
        this.inGanancia.value = datos.articulo.ganancia.toFixed(2);
        this.inTotalGanancia.value = datos.empresa.totalGanancia.toFixed(2);
        this.inCantidadArticulos.value = datos.empresa.cantidadArticulos.toString();
        this.inArticuloMasCaro.value = datos.empresa.articuloMayorPrecioventa;
        this.inPromedioPeso.value = datos.empresa.promedioPeso.toFixed(2); // <-- NUEVO
    }
    mostrar() {
        this.contenedor.style.display = "block";
    }
    ocultar() {
        this.contenedor.style.display = "none";
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map