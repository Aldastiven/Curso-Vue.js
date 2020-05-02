const app = new Vue({
    el: '#app',
    data: { 
        mensaje:'hola mundo',
        contador:0
    },
    methods: {

    },
    computed: {
        invertido(){
            return this.mensaje.split('').reverse().join("");   
        },
        color(){
            return {
                'bg-primary' : this.contador <= 10,
                'bg-success' : this.contador > 10,
                'bg-warning' : this.contador > 50,
                'bg-danger' : this.contador > 80    
            }
        }
    }
});