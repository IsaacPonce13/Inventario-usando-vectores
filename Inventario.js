class Producto{
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    Mostrar(){
        return `<p> Codigo: ${this.codigo} Nombre: ${this.nombre} Cantidad: ${this.cantidad} Costo: $${this.costo}</p>`;
    }
}
class Nodo{
    constructor (NewProd){
    this.Prod = NewProd;
    this.next = null;
    }
}
class Inventario{
    constructor(){
        this.primero = null;
    }
    agregar(NewProd){
        if (this.primero == null)
            this.primero = NewProd;
        else{
            let temp = this.primero;
            while (temp.next != null)
                temp = temp.next;
                temp.next = NewProd;
        }
    }

    buscarProd(codigoProd){
        let temp = this.primero;
        while (temp != null) {
            if (temp.codigo = codigoProd) {
                return temp
            }
            temp = temp.next;
        }
        return null;
    }
    eliminarProd(codigoProd){
        if (this.primero == null) {
            return false;
        }
        let temp = this.primero;
        while (temp != null) {
            if (temp.codigo = codigoProd) {
                    temp = temp.next;
                    temp.next = null;
            }
            return temp;
        }
        return null;
        
    }
    mostrarProd(){
            let aux="";
            let temp=this.primero;
            while(temp!=null){
                aux += temp + " ";
                temp = temp.next;
            }
            return aux;
    }
    mostrarProdInver(){
        if (this.primero==null)
        this.primero = NewProd;
    else{
        NewProd.next = this.primero;
        this.primero = NewProd;       
    }
}

}
