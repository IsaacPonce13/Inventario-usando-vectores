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
        //Agregar Producto en posición deseada
        if (posicion != 0) {
            this.ListaP.push(NewProd);
            for (let i=0; i < this.ListaP.length; i++){
                    if (i > posicion-1) {
                        let aux = this.ListaP[this.ListaP.length-1];
                        for (let j = 0; j > posicion-1 && j < this.ListaP.length; j++) {
                            this.ListaP[j] = this.ListaP[j+1];
                        }
                        this.ListaP[posicion-1] = aux;
                    }
            } 
            console.log(this.ListaP);
        }else{
            console.log("no");
            this.ListaP.push(NewProd);
            console.log(NewProd);
        }
    }

    buscarProd(codigoProd){
        for (let i=0; i < this.ListaP.length; i++){
            if(this.ListaP[i].codigo == codigoProd){
                return this.ListaP[i];
            }
        }    
    }
    eliminarProd(codigoProd){
        let ValorArray = this.ListaP.length-1;
        for (let i=0; i < this.ListaP.length; i++){
            if(this.ListaP[i].codigo == codigoProd){
                let aux = this.ListaP[i];
                for (let j = 0; j < this.ListaP.length; j++) {
                    this.ListaP[j-1] = this.ListaP[j]
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
