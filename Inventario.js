class Producto{
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.sig = null;
        this.ant = null;
    }
    Mostrar(){
        return `<p> Codigo: ${this.codigo} Nombre: ${this.nombre} Cantidad: ${this.cantidad} Costo: $${this.costo}</p>`;
    }
}

class Inventario{
    constructor(){
        this.primero = null;
        this.ultimo = null;
        this.size = 0;
    }

    agregar(NewProd){
        let temp = null;
        if (this.primero == null) {
            this.ultimo = NewProd;
            this.primero = NewProd;
            this.primero.ant = null;
            this.primero.sig = null;
            this.size++;
        }else if(NewProd.codigo < this.primero.codigo){
            temp = this.primero;
            NewProd.sig = temp;
            temp.ant = NewProd;
            this.primero = NewProd;
            this.size++;
        }else{
            temp = this.primero;
            while(temp.sig != null && temp.codigo < NewProd.codigo){
                temp = temp.sig;
            }
            if(NewProd.codigo < temp.codigo){
                NewProd.sig = temp;
                NewProd.ant = temp.ant;
                temp.ant.sig = NewProd;
                temp.ant = NewProd;
                this.size++;
            }else if(NewProd.codigo > temp.codigo){
                NewProd.ant = temp;
                temp.sig = NewProd;
                this.size++;
            }
        }
        temp = this.primero;
            while(temp.sig != null){
                temp = temp.sig;
            }
            this.ultimo = temp;
    }

    buscarProd(codigoProd){
        let temp = this.primero;
        while(temp !== null) {
            if (temp.codigo === codigoProd) {
                return temp;
            }
            temp = temp.sig;
        }
        return null;
    }

    eliminarProd(codigoProd){
        let temp = this.primero;
        while(temp.sig !== null) {
            if (temp.codigo === codigoProd) {
                if (temp.ant == null) {
                    if (this.primero == null) {
                        return null
                    };
                    if (this.primero === this.ultimo) {
                        this.primero = null;
                        this.ultimo = null;
                    } else {
                        this.primero = this.primero.sig;
                        this.primero.ant = null;
                    };
                    this.size--;                
                } else if (temp.sig == null) {
                    if (this.ultimo == null) {
                        return null
                    };
                    if (this.primero === this.ultimo) {
                        this.primero = null;
                        this.ultimo = null;
                    } else {
                        this.ultimo = this.ultimo.amt;
                        this.ultimo.sig = null;
                    };
                    this.size--;
                }else{
                    temp.ant.sig = temp.sig;
                    temp.sig.ant = temp.ant;
                }
                this.size--;
                return temp;
            }
            temp.ant = temp;
            temp = temp.sig;
        }
        return null;
    }

    mostrarProd(){
        let temp = this.primero;
        let res = "";
        while(temp != null) {
            res += temp.Mostrar();
            temp = temp.sig;
        }
        return res;
    }
    mostrarProdInver(){
        let temp = this.ultimo;
        let res = "";
        while(temp != null) {
            res += temp.Mostrar();
            temp = temp.ant;
        }
        return res;
    }

}
