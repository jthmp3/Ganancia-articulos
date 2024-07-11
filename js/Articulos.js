export default class Articulos {
    constructor(cod, cost, prec) {
        this.codigo = cod;
        this.costo = cost;
        this.precio = prec;
    }

    set codigo(cod) {
        this._codigo = cod;
    }
    get codigo() {
        return this._codigo;
    }
    set costo(cost) {
        this._costo = cost;
    }
    get costo() {
        return this._costo;
    }

    set precio(prec) {
        this._precio = prec;
    }
    get precio() {
        return this._precio;
    }
}