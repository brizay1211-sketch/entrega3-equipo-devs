// Importar la clase Empleado
import { Cl_empleado } from './Cl_empleado.js';

// Clase Empresa - Procesa empleados y acumula aumentos
export class Cl_empresa {
    private acAumentos: number;
    
    constructor() {
        this.acAumentos = 0;   // Inicializar acumulador
    }
    
    procesarEmpleado(empleado: Cl_empleado): void {
        const aumento = empleado.calcularAumento();
        console.log(`${empleado.getNombre()} tiene un aumento de $${aumento}`);
        this.acAumentos += aumento;
    }
    
    getTotalAumentos(): number {
        return this.acAumentos;
    }
}