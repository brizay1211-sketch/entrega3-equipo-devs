// controllers/Cl_cEmpresa.ts
import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
export default class Cl_cEmpresa {
    mEmpresa = new Cl_mEmpresa();
    vEmpresa;
    cArticulo;
    constructor(vistaEmpresa, controladorArticulo) {
        this.vEmpresa = vistaEmpresa;
        this.cArticulo = controladorArticulo;
        this.vEmpresa.onProcesar1Articulo(() => this.procesar1Articulo());
    }
    procesar1Articulo() {
        this.cArticulo.solicitarArticulo((articulo) => {
            if (articulo) {
                this.mEmpresa.procesarArticulo(articulo);
                this.vEmpresa.reportar({ empresa: this.mEmpresa, articulo });
            }
        });
    }
}
//# sourceMappingURL=Cl_cEmpresa.js.map