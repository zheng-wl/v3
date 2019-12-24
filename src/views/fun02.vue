<template>
    <div></div>
</template>
<script>
import { ref , reactive , toRefs , computed , watch } from "@vue/composition-api";
export default {
    setup(){
        // -------------------------
        // const refCount = ref(0);
        // watch(()=>console.log(refCount.value));
        // setTimeout(()=>{
        //     refCount.value+=1;
        // },100)
        // -------------------------
        // const state  = reactive({
        //     count:0
        // });

        // watch(
        //     ()=>state.count,
        //     (newVal,oldVal)=>{
        //         console.log(newVal,oldVal)
        //     },
        //     {
        //         lazy:true
        //     }
        // );

        // setInterval(() => {
        //      state.count+=1;
        // }, 1000);

        //--------------
        const state = reactive({
            count:0,
            name:'zs'
        });
        watch(
            [()=>state.count,()=>state.name],
            ([newCount,newName],[oldCount,oldName])=>{
                console.log(newCount,newName);
                console.log(oldCount,oldName);
            },
            {
                lazy:true
            }
        )

        setTimeout(()=>{
            state.count+=1;
        },1000);
        setTimeout(()=>{
            state.name+="1";
        },1000)

        

    
    }
}
</script>
<style lang="scss">

</style>