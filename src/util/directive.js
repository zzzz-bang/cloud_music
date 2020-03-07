import Vue from 'vue';
Vue.directive('title',{
    inserted(el,binding){
        console.log(el,binding.value,'zhiling')
        el.style.display='none'
        window.onscroll=()=>{
            if((document.documentElement.scrollTop||document.body.scrollTop)>binding.value){
                el.style.display='block'
            }else{
                el.style.display='none'
            }
        }
    },
    unbind(){
        window.onscroll=null
    }
})