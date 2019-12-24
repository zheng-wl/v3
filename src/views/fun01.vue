<template>
    <div>
        <p>count的值为{{refCount}}</p>
        <p>{{count1}}-{{name}}</p>
        <button @click="add"></button>

        <p>{{counts}}</p>
        <p>{{computedCounts}}</p>
        <button @click="counts+=1">+1</button>
    </div>
</template>

<script lang="ts">
import { ref , reactive , toRefs ,computed } from "@vue/composition-api";
export default{
    setup(){
        const refCount= ref("1");
        const state  =reactive({count1:1,name:'zs'});
        const add = () =>{
            state.count1 +=1;
        }

        const counts =ref(0);
        const computedCounts = computed(()=>counts.value +1);
        return{
            counts,
            computedCounts,
            refCount,
            ...toRefs(state),
            add
        };
    }
}


//1.setup
//2.ref()
//3.reactive({}) , ...toRefs()
//4.computed
//5.
</script>

<style lang="scss">

</style>