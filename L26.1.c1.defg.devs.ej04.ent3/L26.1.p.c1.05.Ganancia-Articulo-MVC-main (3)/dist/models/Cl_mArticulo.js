export default class Cl_mArticulo {
    _costo = 0;
    _codigo = 0;
    _venta = 0;
    _peso = 0; // <-- NUEVO
    constructor({ codigo, costo, venta, peso } = // <-- Se agregó peso
     {
        codigo: 0,
        costo: 0,
        venta: 0,
        peso: 0, // <-- NUEVO
    }) {
        this.codigo = codigo;
        this.costo = costo;
        this.venta = venta;
        this.peso = peso; // <-- NUEVO
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    set codigo(codigo) {
        this._codigo = +codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set venta(venta) {
        this._venta = +venta;
    }
    get venta() {
        return this._venta;
    }
    // NUEVO: getter y setter para peso
    set peso(peso) {
        this._peso = +peso;
    }
    get peso() {
        return this._peso;
    }
    get ganancia() {
        return this.venta - this.costo;
    }
}
//# sourceMappingURL=Cl_mArticulo.js.map