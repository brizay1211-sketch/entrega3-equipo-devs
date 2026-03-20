export default class Cl_vEmpresaBootstrap {
    btProcesarPersonal;
    lblTotalObreros;
    lblPromedioObreros;
    lblTotalAdministrativos;
    lblPromedioAdministrativos;
    lblRegistrosProcesados;
    constructor() {
        this.btProcesarPersonal = document.getElementById("body_btProcesarPersonal");
        this.lblTotalObreros = document.getElementById("body_lblTotalObreros");
        this.lblPromedioObreros = document.getElementById("body_lblPromedioObreros");
        this.lblTotalAdministrativos = document.getElementById("body_lblTotalAdministrativos");
        this.lblPromedioAdministrativos = document.getElementById("body_lblPromedioAdministrativos");
        this.lblRegistrosProcesados = document.getElementById("body_lblRegistrosProcesados");
    }
    onProcesarPersonal(callback) {
        this.btProcesarPersonal.onclick = callback;
    }
    reportar(empresa) {
        this.lblTotalObreros.innerHTML = empresa.totalobreros.toString();
        this.lblPromedioObreros.innerHTML = empresa.PromedioObreros.toFixed(2);
        this.lblTotalAdministrativos.innerHTML = empresa.totalAdministrativos.toString();
        this.lblPromedioAdministrativos.innerHTML = empresa.PromedioAdministrativos.toFixed(2);
        this.lblRegistrosProcesados.innerHTML = empresa.registrosProcesados.toString();
    }
}
//# sourceMappingURL=Cl_vEmpresaBootstrap.js.map