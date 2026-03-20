export default class Cl_mEmpresa {
    acObreros = 0;
    acAdministrativos = 0;
    cntObreros = 0;
    cntAdministrativos = 0;
    procesarPersonal(p) {
        if (p.tipo === 1) {
            this.acObreros += p.salarioTotal; // <-- se suma el total con bono
            this.cntObreros++;
        }
        else if (p.tipo === 2) {
            this.acAdministrativos += p.salarioTotal;
            this.cntAdministrativos++;
        }
    }
    get PromedioObreros() {
        return this.cntObreros === 0 ? 0 : this.acObreros / this.cntObreros;
    }
    get PromedioAdministrativos() {
        return this.cntAdministrativos === 0 ? 0 : this.acAdministrativos / this.cntAdministrativos;
    }
    get totalobreros() {
        return this.acObreros;
    }
    get totalAdministrativos() {
        return this.acAdministrativos;
    }
}
//# sourceMappingURL=Cl_mEmpresa.js.map