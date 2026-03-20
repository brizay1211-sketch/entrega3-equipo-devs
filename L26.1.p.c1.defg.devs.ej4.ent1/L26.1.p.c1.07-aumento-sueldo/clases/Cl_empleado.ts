// Clase Empleado - Representa a un empleado individual
export class Cl_empleado {
    private nombre: string;
    private tipo: string;      // "obrero" o "administrativo"
    private sueldo: number;
    
    constructor(nombre: string, tipo: string, sueldo: number) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.sueldo = sueldo;
    }
    
    getNombre(): string {
        return this.nombre;
    }
    
    getTipo(): string {
        return this.tipo;
    }
    
    getSueldo(): number {
        return this.sueldo;
    }
    
    calcularAumento(): number {
        if (this.tipo === "obrero") {
            return this.sueldo * 0.20;   // 20% para obreros
        } else if (this.tipo === "administrativo") {
            return this.sueldo * 0.10;   // 10% para administrativos
        }
        return 0;
    }
}