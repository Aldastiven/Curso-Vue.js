Vue.component('padre',{
    template :/*html*/
        `<div class="p-3 bg-dark text-white">
            <h2>Componente padre : {{numeroPadre}}</h2>
            <button @click="numeroPadre++" class="btn btn-lg btn-primary mb-2"> comunicar dato </button>
            {{nombreHijo}}
            <hijo :numero="numeroPadre" @nombreHijo="nombreHijo = $event"></hijo>
        </div>`,
        data(){
            return{ 
                numeroPadre : 0,
                nombreHijo : ''
            };
        }    
}); 