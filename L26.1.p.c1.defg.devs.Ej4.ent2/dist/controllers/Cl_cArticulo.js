import Cl_mArticulo from "../models/Cl_mArticulo.js";
import vista from "../views/Cl_vArticulo.js";
export default class Cl_cArticulo {
    vista = new vista();
    callback;
    constructor({ callback, }) {
        this.callback = callback;
        this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
        this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mArticulo({
            codigo: this.vista.codigo,
            costo: this.vista.costo,
            venta: this.vista.venta
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cArticulo.js.map