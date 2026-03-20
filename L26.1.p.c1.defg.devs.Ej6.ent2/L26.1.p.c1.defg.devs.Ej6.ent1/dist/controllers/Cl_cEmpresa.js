import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
export default class Cl_cEmpresa {
    mEmpresa = new Cl_mEmpresa();
    vEmpresa;
    cPersonal;
    constructor(vistaEmpresa, controladorPersonal) {
        this.vEmpresa = vistaEmpresa;
        this.cPersonal = controladorPersonal;
        this.vEmpresa.onProcesarPersonal(() => this.procesarPersonal());
    }
    procesarPersonal() {
        this.cPersonal.solicitarPersonal((personal) => {
            if (personal !== null) {
                this.mEmpresa.procesarPersonal(personal);
                this.vEmpresa.reportar(this.mEmpresa);
            }
        });
    }
}
//# sourceMappingURL=Cl_cEmpresa.js.map