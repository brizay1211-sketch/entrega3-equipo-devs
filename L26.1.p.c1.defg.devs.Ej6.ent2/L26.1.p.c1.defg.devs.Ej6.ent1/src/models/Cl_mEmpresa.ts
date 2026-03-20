import Cl_mPersonal from "./Cl_mPersonal.js";

export default class Cl_mEmpresa {
  private acObreros: number = 0;
  private acAdministrativos: number = 0;
  private cntObreros: number = 0;
  private cntAdministrativos: number = 0;
  private acPeso: number = 0;

  procesarPersonal(p: Cl_mPersonal): void {
    if (p.tipo === 1) {
      this.acObreros += p.salarioTotal;
      this.cntObreros++;
    } else if (p.tipo === 2) {
      this.acAdministrativos += p.salarioTotal;
      this.cntAdministrativos++;
    }
    this.acPeso +=p.peso;
  }

  get PromedioObreros(): number {
    return this.cntObreros === 0 ? 0 : this.acObreros / this.cntObreros;
  }
  get PromedioAdministrativos(): number {
    return this.cntAdministrativos === 0 ? 0 : this.acAdministrativos / this.cntAdministrativos;
  }
  get totalobreros(): number {
    return this.acObreros;
  }
  get totalAdministrativos(): number {
    return this.acAdministrativos;
  }
  get registrosProcesados(): number {
    return this.cntObreros + this.cntAdministrativos;
  }
  get PromedioPeso(): number {
    return this.acPeso/ (this.cntObreros+this.cntAdministrativos);
  }
}