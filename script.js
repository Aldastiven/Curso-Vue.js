const app = new Vue({
    el: '#app',
    data: { 
        tareas : [],
        nuevaTarea:''
    },
    methods: {
        
        agregarTarea(){                
            this.tareas.push({
                nombre : this.nuevaTarea,
                estado : false
            });        
            this.nuevaTarea = '';
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        },

        editarTarea(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        },

        eliminarTarea(index){
            this.tareas.splice(index,1);
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        }
        
    },
    computed: {
        
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        this.tareas = (datosDB === null ? [] : datosDB);
    }
});