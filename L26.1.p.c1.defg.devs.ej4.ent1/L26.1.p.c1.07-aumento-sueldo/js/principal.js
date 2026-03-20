// Importar las clases necesarias
import { Cl_empleado } from './clases/Cl_empleado.js';
import { Cl_empresa } from './clases/Cl_empresa.js';
// Función para mostrar resultados en el HTML
function mostrarEnHTML(mensaje, esTotal = false) {
    const outputDiv = document.getElementById('output');
    const totalSpan = document.getElementById('totalAmount');
    if (outputDiv) {
        if (esTotal) {
            // Para el total, actualizamos el span especial
            if (totalSpan) {
                totalSpan.textContent = mensaje;
            }
        }
        else {
            // Para los aumentos individuales, los agregamos al output
            outputDiv.innerHTML += mensaje + '<br>';
        }
    }
    // También mantenemos el console.log para debugging
    console.log(mensaje);
}
// Crear instancias de empleados (según el enunciado)
const empleados = [
    new Cl_empleado("Juan", "obrero", 100),
    new Cl_empleado("Ana", "obrero", 120),
    new Cl_empleado("Lin", "administrativo", 200),
    new Cl_empleado("Mary", "obrero", 50),
    new Cl_empleado("Carlos", "administrativo", 150)
];
// Crear la empresa
const empresa = new Cl_empresa();
// Limpiar el output antes de empezar
const outputDiv = document.getElementById('output');
if (outputDiv) {
    outputDiv.innerHTML = ''; // Limpiar mensaje de "Cargando..."
}
// Procesar cada empleado
mostrarEnHTML("📋 Aumentos individuales:\n");
for (let i = 0; i < empleados.length; i++) {
    const empleado = empleados[i];
    const aumento = empleado.calcularAumento();
    empresa.procesarEmpleado(empleado); // Este ya hace console.log
    // Mostrar también en HTML
    mostrarEnHTML(`${empleado.getNombre()} (${empleado.getTipo()}): $${empleado.getSueldo()} → aumento de $${aumento}`);
}
// Mostrar total final
const total = empresa.getTotalAumentos();
mostrarEnHTML("\n" + "=".repeat(40));
mostrarEnHTML(`💰 El total de monto adicional es: $${total}`);
mostrarEnHTML("=".repeat(40));
// Mostrar el total en el contenedor especial
mostrarEnHTML(`$${total}`, true);
//# sourceMappingURL=principal.js.map