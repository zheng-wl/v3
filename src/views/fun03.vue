<template>
    <div>
        <p>count的值为{{refCount}}</p>
  
    </div>
</template>

<script lang="ts">
import { ref , reactive , toRefs , computed , watch, onMounted,  Ref , createComponent } from "@vue/composition-api";
export default createComponent({
    setup(){
        const refCount:Ref<number> = ref("123456789");
        console.log(typeof refCount.value)
        refCount.value = 123456;

        watch(()=>refCount.value*2,val=>{
            console.log(`count*2 is ${val}`)
        })


        return{
             refCount,
        };
    }
})
</script>

<style lang="scss">

</style>