
Vue.component('conteo',
{
    template:
    /*html*/
    `<div class="d-flex justify-content-between mt-5">
        <button @click="contador--" class="btn btn-danger btn-lg btn-block">-</button>
        <h3 class="ml-5 mr-5">{{contador}}</h3>
        <button @click="contador++" class="btn btn-success btn-lg btn-block">+</button>
    </div>`,
    data(){
        return {
            contador : 0,
        }
    }   
});

