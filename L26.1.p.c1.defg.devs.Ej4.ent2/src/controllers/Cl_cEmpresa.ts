
import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import Cl_vEmpresa from "../views/Cl_vEmpresa.js";
import Cl_cPersonal from "./Cl_cPersonal.js";


export default class Cl_cEmpresa {
  private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
  private vEmpresa: Cl_vEmpresa = new Cl_vEmpresa();

  constructor() {
    this.vEmpresa.btProcesarPersonal.onclick = () => this.procesarPersonal();
  }
  procesarPersonal(): void {
    new Cl_cPersonal({
      callback: (personal) => {
        if (personal) {
          this.mEmpresa.procesarPersonal(personal);
          this.vEmpresa.reportar({ empresa: this.mEmpresa, personal });
        }
      },
    });
  }
}
