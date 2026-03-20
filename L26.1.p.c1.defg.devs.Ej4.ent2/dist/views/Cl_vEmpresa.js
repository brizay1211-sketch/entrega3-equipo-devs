export default class Cl_vEmpresa {
    lblPromedioObreros;
    btProcesarPersonal;
    lblPromedioAdministrativos;
    lblTotalObreros;
    lblTotalAdministrativos;
    constructor() {
        this.lblPromedioObreros = document.getElementById("body_lblPromedioObreros");
        this.btProcesarPersonal = document.getElementById("body_btProcesarPersonal");
        this.lblPromedioAdministrativos = document.getElementById("body_lblPromedioAdministrativos");
        this.lblTotalObreros = document.getElementById("body_lblTotalObreros");
        this.lblTotalAdministrativos = document.getElementById("body_lblTotalAdministrativos");
    }
    reportar({ empresa, personal }) {
        this.lblPromedioObreros.innerHTML = `${empresa.PromedioObreros}`;
        this.lblPromedioAdministrativos.innerHTML = `${empresa.PromedioAdministrativos}`;
        this.lblTotalObreros.innerHTML = `${empresa.totalobreros}`;
        this.lblTotalAdministrativos.innerHTML = `${empresa.totalAdministrativos}`;
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map