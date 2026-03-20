// Clase Empleado - Representa a un empleado individual
export class Cl_empleado {
    constructor(nombre, tipo, sueldo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.sueldo = sueldo;
    }
    getNombre() {
        return this.nombre;
    }
    getTipo() {
        return this.tipo;
    }
    getSueldo() {
        return this.sueldo;
    }
    calcularAumento() {
        if (this.tipo === "obrero") {
            return this.sueldo * 0.20; // 20% para obreros
        }
        else if (this.tipo === "administrativo") {
            return this.sueldo * 0.10; // 10% para administrativos
        }
        return 0;
    }
}
//# sourceMappingURL=Cl_empleado.js.map