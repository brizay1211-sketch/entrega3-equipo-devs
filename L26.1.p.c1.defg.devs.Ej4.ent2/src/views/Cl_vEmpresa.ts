import Cl_mPersonal from "../models/Cl_mPersonal";
import Cl_mEmpresa from "../models/Cl_mEmpresa";

export default class Cl_vEmpresa {
  lblPromedioObreros: HTMLLabelElement;
  btProcesarPersonal: HTMLButtonElement;
  
  lblPromedioAdministrativos: HTMLElement;
  lblTotalObreros: HTMLElement;
  lblTotalAdministrativos: HTMLElement;


  constructor() {
    
    this.lblPromedioObreros = document.getElementById(
      "body_lblPromedioObreros",
    ) as HTMLLabelElement;
    this.btProcesarPersonal = document.getElementById(
      "body_btProcesarPersonal",
    ) as HTMLButtonElement;
    this.lblPromedioAdministrativos = document.getElementById(
      "body_lblPromedioAdministrativos",
    ) as HTMLElement;
    this.lblTotalObreros = document.getElementById(
      "body_lblTotalObreros",
    ) as HTMLElement;
    this.lblTotalAdministrativos = document.getElementById(
      "body_lblTotalAdministrativos",
    ) as HTMLElement;
  }

  reportar({ empresa, personal }: { empresa: Cl_mEmpresa, personal: Cl_mPersonal }): void {

    this.lblPromedioObreros!.innerHTML = `${empresa.PromedioObreros}`;
    this.lblPromedioAdministrativos!.innerHTML = `${empresa.PromedioAdministrativos}`;
     this.lblTotalObreros!.innerHTML = `${empresa.totalobreros}`;
      this.lblTotalAdministrativos!.innerHTML = `${empresa.totalAdministrativos}`;
  }
}
