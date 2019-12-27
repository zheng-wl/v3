<template>
    <div>
        <p>count的值为{{refCount}}</p>
        <p>plusOne: {{plusOne}} </p>
        <button @click="refCount+=1">+1</button>
    </div>
</template>

<script lang="ts">
import { ref , reactive , toRefs , computed , watch, onMounted,  Ref , createComponent } from "@vue/composition-api";
export default createComponent({
    setup(){
        const refCount:Ref<number> = ref(1);
        console.log(typeof refCount.value)
        refCount.value = 123456;
        
        watch(()=>refCount.value*2,val=>{
            console.log(`count*2 is ${val}`)
        })

        const plusOne = computed(()=>refCount.value +1);

        onMounted(()=>{
            console.log('onMounted')
        })

        return{
             refCount,
             plusOne
        };
    }
})

//1. onMounted
//2. createComponent 方便使用类型推断
//3. :Ref<number>
//4. watch
//5. computed
</script>

<style lang="scss">

</style>