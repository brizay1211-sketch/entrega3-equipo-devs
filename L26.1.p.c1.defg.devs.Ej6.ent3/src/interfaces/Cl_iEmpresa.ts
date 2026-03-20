import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import Cl_mArticulo from "../models/Cl_mArticulo.js";

export interface Cl_iEmpresa {
  onProcesar1Articulo(callback: () => void): void;
  reportar(datos: { empresa: Cl_mEmpresa; articulo: Cl_mArticulo }): void;
  mostrar?(): void;
  ocultar?(): void;
}