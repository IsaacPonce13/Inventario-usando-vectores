class Producto{
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    MostrarProd(){
        return `<p> Codigo: ${this.codigo} Nombre: ${this.nombre} Cantidad: ${this.cantidad} Costo: $${this.costo}</p>`;
    }
}

class Inventario{
    constructor(){
        this.ListaP = [];
    }

    insertarProd(NewProd, posicion){
        //Agregar Producto
        this.ListaP.push(NewProd);
        //Agregar Producto en posición deseada
        // if (posicion != 0) {
        //     let aux;
        //     aux = this.ListaP[posicion+1]
        //     for (let i = 0; i > posicion + 1; i++){
        //         this.ListaP[i] = this.ListaP[i+1]
        //     }
        //     this.ListaP[this.ListaP.length+1] = aux;
        // }
    }

    buscarProd(codigoProd){
        for (let i=0; i < this.ListaP.length; i++){
            if(this.ListaP[i].codigo == codigoProd){
                return this.ListaP[i];
            }
        }
        return null;
    }
    eliminarProd(codigoProd){
        let ValorArray = this.ListaP.length-1;
        for (let i=0; i < this.ListaP.length; i++){
            if(this.ListaP[i].codigo == codigoProd){
                let aux = this.ListaP[i];
                for (let j = 0; j < this.ListaP.length; j++) {
                    this.ListaP[j-1] = this .ListaP[j]
                }
                this.ListaP[ValorArray] = aux;
                this.ListaP.pop();
            }
        }
        alert("Producto eliminado")
    }
    mostrarProd(){

        let aux=""
        for (let i = 0; i < this.ListaP.length; i++) {
            aux += this.ListaP[i].MostrarProd();
        }
        return aux;
    }
    mostrarProdInver(){
        let aux=""
        for (let i = this.ListaP.length-1; i >= 0; i--) {
            aux += this.ListaP[i].MostrarProd();
        }
        return aux;
    }

}
