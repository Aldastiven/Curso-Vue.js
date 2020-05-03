Vue.component('hijo',{
    template :/*html*/
        `<div class="bg-success p-5 text-white">
            <h4>hijo : {{numero}}</h4>
            <h4>nombre : {{nombre}} </h4>      
        </div>`,
        props : ['numero'],//este objeto recive datos del contenedor padre
        data(){
            return {
                nombre : 'Stiven',
                numero : 0
            }
        },
        mounted(){//este metodo se activa cuando termina el DOM
            this.$emit('nombreHijo',this.nombre);//esta linea se encarga de mandar datos al padre
        }
});