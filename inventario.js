export default class Inventario{
    constructor(){
        this.lista = new Array;
    }

    getLista(){
        return this.lista;
    }

    agregar(nuevo){
        this.lista.push(nuevo);
        console.log(this.lista);
    }

    ordenar() {
        if (this.lista.length != 0) {
            let aux = 0;
            for (let i = 0; i < this.lista.length - 1; i++)
                for (let j = 0; j < this.lista.length - i - 1; j++)
                    if (this.lista[j + 1].codigo < this.lista[j].codigo) {
                        aux = this.lista[j + 1];
                        this.lista[j + 1] = this.lista[j];
                        this.lista[j] = aux;
                    }
        }else {
            return null;
        }
    }

    eliminar(codigo){
        let position = this.indice(codigo);
        if(position < this.lista.length + 1){
            for (let i = position; i < this.lista.length -1; i++){
                this.lista[i] = this.lista[i + 1]
            }
            this.lista.pop(this.lista.length)
            return true;
        }else {
            return false;
        }
    }

    indice(codigo){
        for (let i = 0; i < this.lista.length; i++){
            if (codigo === this.lista[i].codigo){
                return i;
            }
        }
        return this.lista.length + 1;
    }

    listado(){
        let inventarioTotal = ''; 
        
        this.lista.forEach((producto) => {inventarioTotal += producto.getInfo()});

        return inventarioTotal; 
    }

    listadoInverso(){
        let inventarioTotal = ''; 
        this.lista.reverse();
        
        this.lista.forEach((producto) => {inventarioTotal += producto.getInfo()});

        return inventarioTotal; 
    }

    busqueda(codigo){
        let inicio = 0;
        let fin = this.lista.length - 1;
        let mitad = Math.floor((inicio + fin) / 2);
        let resultado = null;
        while (inicio <= fin) {
            if (this.lista[mitad].codigo === codigo) {
                resultado = this.lista[mitad];
                break;
            } else if (this.lista[mitad].codigo < codigo) {
                inicio = mitad + 1;
            } else
                fin = mitad - 1;
            mitad = Math.floor((inicio + fin) / 2);
        }
        return resultado;
    }
}