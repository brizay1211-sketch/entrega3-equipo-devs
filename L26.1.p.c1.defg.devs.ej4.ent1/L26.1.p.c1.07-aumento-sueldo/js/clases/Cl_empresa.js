// Clase Empresa - Procesa empleados y acumula aumentos
export class Cl_empresa {
    constructor() {
        this.acAumentos = 0; // Inicializar acumulador
    }
    procesarEmpleado(empleado) {
        const aumento = empleado.calcularAumento();
        console.log(`${empleado.getNombre()} tiene un aumento de $${aumento}`);
        this.acAumentos += aumento;
    }
    getTotalAumentos() {
        return this.acAumentos;
    }
}
//# sourceMappingURL=Cl_empresa.js.map