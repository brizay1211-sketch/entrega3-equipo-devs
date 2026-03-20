import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";
import Cl_mEmpresa from "../models/Cl_mEmpresa.js";

export default class Cl_vEmpresaBootstrap implements I_vEmpresa {
  private btProcesarPersonal: HTMLButtonElement;
  private lblTotalObreros: HTMLElement;
  private lblPromedioObreros: HTMLElement;
  private lblTotalAdministrativos: HTMLElement;
  private lblPromedioAdministrativos: HTMLElement;
  private lblRegistrosProcesados: HTMLElement;

  constructor() {
    this.btProcesarPersonal = document.getElementById("body_btProcesarPersonal") as HTMLButtonElement;
    this.lblTotalObreros = document.getElementById("body_lblTotalObreros") as HTMLElement;
    this.lblPromedioObreros = document.getElementById("body_lblPromedioObreros") as HTMLElement;
    this.lblTotalAdministrativos = document.getElementById("body_lblTotalAdministrativos") as HTMLElement;
    this.lblPromedioAdministrativos = document.getElementById("body_lblPromedioAdministrativos") as HTMLElement;
    this.lblRegistrosProcesados = document.getElementById("body_lblRegistrosProcesados") as HTMLElement;
  }

  onProcesarPersonal(callback: () => void): void {
    this.btProcesarPersonal.onclick = callback;
  }

  reportar(empresa: Cl_mEmpresa): void {
    this.lblTotalObreros.innerHTML = empresa.totalobreros.toString();
    this.lblPromedioObreros.innerHTML = empresa.PromedioObreros.toFixed(2);
    this.lblTotalAdministrativos.innerHTML = empresa.totalAdministrativos.toString();
    this.lblPromedioAdministrativos.innerHTML = empresa.PromedioAdministrativos.toFixed(2);
    this.lblRegistrosProcesados.innerHTML = empresa.registrosProcesados.toString();
  }
}