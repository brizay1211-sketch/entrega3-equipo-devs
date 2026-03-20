import Cl_mPersonal from "../models/Cl_mPersonal.js";
import vista from "../views/Cl_vPersonal.js";
export default class Cl_cPersonal {
    vista = new vista();
    callback;
    constructor({ callback }) {
        this.callback = callback;
        this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
        this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mPersonal({
            nombre: this.vista.nombre,
            tipo: this.vista.tipo,
            salario: this.vista.salario, // salario base
            bono: this.vista.bono, // bono adicional
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cPersonal.js.map