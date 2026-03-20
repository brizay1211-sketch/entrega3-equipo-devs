import Cl_mEmpresa from "../models/Cl_mEmpresa.js";

export interface I_vEmpresa {
  onProcesarPersonal(callback: () => void): void;
  reportar(empresa: Cl_mEmpresa): void;
}