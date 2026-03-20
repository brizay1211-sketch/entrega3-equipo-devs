export default class Cl_mEmpresa {
    acGanancia = 0;
    acCosto = 0;
    cntArticulos = 0;
    acPeso = 0; // <-- NUEVO acumulador de peso
    mayPrecio = 0;
    nombreMayPrecio = "";
    procesarArticulo(a) {
        this.acGanancia += a.ganancia;
        this.acCosto += a.costo;
        this.acPeso += a.peso; // <-- NUEVO
        this.cntArticulos++;
        if (a.venta > this.mayPrecio) {
            this.mayPrecio = a.venta;
            this.nombreMayPrecio = a.codigo.toString();
        }
    }
    get totalGanancia() {
        return this.acGanancia;
    }
    get cantidadArticulos() {
        return this.cntArticulos;
    }
    get articuloMayorPrecioventa() {
        return this.nombreMayPrecio;
    }
    get totalprocesados() {
        return this.cntArticulos;
    }
    get promediocosto() {
        return this.acCosto / this.cntArticulos;
    }
    // NUEVO: promedio de peso
    get promedioPeso() {
        return this.cntArticulos > 0 ? this.acPeso / this.cntArticulos : 0;
    }
}
//# sourceMappingURL=Cl_mEmpresa.js.map