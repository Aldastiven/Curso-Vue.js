const app = new Vue({
    el: '#app',
    data: {

        titulo : 'Agregar Nuevas frutas',
        frutas : [
            {nombre : 'pera', cantidad : 0},
            {nombre : 'manzana', cantidad : 10},
            {nombre : 'platano', cantidad : 11}
        ],
        nuevaFruta : '',
        totalfruta : 0
    
    },
    methods: {

        agregarFruta(){
            campoFruta = this.nuevaFruta;
            frutaAgregada = this.frutas;
            if(campoFruta != ''){
                frutaAgregada.push({
                    nombre: campoFruta,
                    cantidad: 0
                });
                this.nuevaFruta = '';            
            }
        }

    },
    computed: {

        sumarCantidad(){
            
            this.totalfruta = 0;
            for(fruta of this.frutas){
                this.totalfruta = this.totalfruta + fruta.cantidad;
            }
            return this.totalfruta;
        }

    }

})