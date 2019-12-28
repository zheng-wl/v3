<template>
    <div class="block" >
        {{a1}}
        <div class="zhuti1">12345648</div>  
        <div data-theme='pink-theme'  id="aas">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
       <div class="qwe">123</div>

    </div>

</template>
<script lang='ts'>

// let a = document.getElementById("aa").setAttribute('data-theme', 'green');

import { ref , reactive , toRefs , computed , watch, onMounted,  Ref , createComponent } from "@vue/composition-api";
export default {
    setup(){
        let a1 = ref('print'); 
        onMounted(()=>{
            console.log()
            document.getElementById("aas").setAttribute('data-theme', 'blue');
            console.log("1234")

            let arr = [1,2,3,5,8,9];
            as:for(let item of arr){
                if(item == 5){
                    break as;
                }
                console.log(item)
            }

        })
        return {
            a1
        }
    }
    

}
</script>

<style lang="scss">
    @import '../../assets/zhuti';
    @include base-background();
   
    .price{
        @include color_primary($color-primary);
    }

</style>