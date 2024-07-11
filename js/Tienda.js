export default class Tienda {
    constructor() {
        this.acumGanancia = 0;
        this.mayor = 0;
        this.auxCodigo = 0;
    }

    procesarArticulos(art) {
        this.acumGanancia +=(art.precio - art.costo);
        if (art.precio > this.mayor) {
            this.mayor = art.precio;
            this.auxCodigo = art.codigo;
        }
    }

    gananciaTotal() {
        return this.acumGanancia;
    }
    mayorPrecio() {
        return this.mayor;
    }
    codigomayor() {
        return this.auxCodigo;
    }


}