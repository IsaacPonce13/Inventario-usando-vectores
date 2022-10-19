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
        while (Prod.next != null) {
            i++;
        }
        for (let j = codigoProd; j == i-1; j++) {
            if (i == codigoProd) {
                return Prod;
            }
        }
    }
    eliminarProd(codigoProd){
        while (Prod.next != null) {
            i++;
        }
        for (let j = codigoProd; j == i-1; j++) {
            let borrar = Prod;
        if(borrar != null){
            borrar.next = null;
            borrar.next = null;
        }
        return borrar;
        }
        
    }
    mostrarProd(){
            let aux="";
            let temp=this.primero;
            while(temp!=null){
                aux += temp.Prod + " ";
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
