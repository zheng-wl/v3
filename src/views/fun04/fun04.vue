<template>
    <div>
        <button @click="abc(1,1)"> 点击</button>
    </div>
</template>
<script lang="ts">
    import {time,setTitle }from './fun04'
    console.log(time)

    function abc (name:string,age:number){
        console.log(name,age)
    }


    import { ref , reactive , toRefs , computed , watch , onMounted , Ref,createComponent  } from "@vue/composition-api";
     export default{
         setup(){
            onMounted(()=>{
                setTitle("1");
                abc("x1",18);
            })
            return {
                abc
            }
         }
     }
</script>