import Cl_mPersonal from "../models/Cl_mPersonal.js";
export default class Cl_cPersonal {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarPersonal(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mPersonal({
            nombre: this.vista.nombre,
            tipo: this.vista.tipo,
            salario: this.vista.salario,
            bono: this.vista.bono,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cPersonal.js.map