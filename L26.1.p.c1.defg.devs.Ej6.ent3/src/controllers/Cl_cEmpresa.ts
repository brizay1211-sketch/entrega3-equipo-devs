// controllers/Cl_cEmpresa.ts
import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import { Cl_iEmpresa } from "../interfaces/Cl_iEmpresa.js";
import Cl_cArticulo from "./Cl_cArticulo.js";

export default class Cl_cEmpresa {
  private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
  private vEmpresa: Cl_iEmpresa;
  private cArticulo: Cl_cArticulo;

  constructor(vistaEmpresa: Cl_iEmpresa, controladorArticulo: Cl_cArticulo) {
    this.vEmpresa = vistaEmpresa;
    this.cArticulo = controladorArticulo;
    
    this.vEmpresa.onProcesar1Articulo(() => this.procesar1Articulo());
  }

  private procesar1Articulo(): void {
    this.cArticulo.solicitarArticulo((articulo) => {
      if (articulo) {
        this.mEmpresa.procesarArticulo(articulo);
        this.vEmpresa.reportar({ empresa: this.mEmpresa, articulo });
      }
    });
  }
}