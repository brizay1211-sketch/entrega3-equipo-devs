export default class Cl_mPersonal {
    _nombre = "";
    _tipo = 0;
    _salarioBase = 0;
    _bono = 0;
    constructor({ nombre, tipo, salario, bono } = {
        nombre: "",
        tipo: 0,
        salario: 0,
        bono: 0,
    }) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.salarioBase = salario;
        this.bono = bono;
    }
    set nombre(nombre) { this._nombre = nombre; }
    get nombre() { return this._nombre; }
    set tipo(tipo) { this._tipo = +tipo; }
    get tipo() { return this._tipo; }
    set salarioBase(salario) { this._salarioBase = +salario; }
    get salarioBase() { return this._salarioBase; }
    set bono(bono) { this._bono = +bono; }
    get bono() { return this._bono; }
    get salarioTotal() {
        return this.salarioBase + this.bono;
    }
}
//# sourceMappingURL=Cl_mPersonal.js.map