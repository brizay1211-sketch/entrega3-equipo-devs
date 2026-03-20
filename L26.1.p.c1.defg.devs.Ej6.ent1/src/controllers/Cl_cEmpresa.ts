import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";
import Cl_cPersonal from "./Cl_cPersonal.js";

export default class Cl_cEmpresa {
  private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
  private vEmpresa: I_vEmpresa;
  private cPersonal: Cl_cPersonal;

  constructor(vistaEmpresa: I_vEmpresa, controladorPersonal: Cl_cPersonal) {
    this.vEmpresa = vistaEmpresa;
    this.cPersonal = controladorPersonal;
    this.vEmpresa.onProcesarPersonal(() => this.procesarPersonal());
  }

  private procesarPersonal() {
    this.cPersonal.solicitarPersonal((personal) => {
      if (personal !== null) {
        this.mEmpresa.procesarPersonal(personal);
        this.vEmpresa.reportar(this.mEmpresa);
      }
    });
  }
}