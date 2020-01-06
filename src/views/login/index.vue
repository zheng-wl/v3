<template>  
    <div>
        <input type="text" v-model='loginUser'>
        <input type="text" v-model='password'>
        <input type="button" @click="handlesubmit">
    </div>
</template>
<script lang ='ts'> 
    import axios from 'axios';
    import { ref , reactive , toRefs , computed , watch , onMounted , Ref,createComponent  } from "@vue/composition-api";
    export default  createComponent({
         setup(){
            const loginUser:Ref<string> = ref('');
            const password:Ref<string> = ref('');
            onMounted(()=>{
                console.log('jiazai');
                axios.get('cart/getCartList/qqq')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            })
            let handlesubmit = ()=>{
                console.log(loginUser.value);
                console.log(password.value);
            }   
            let functionArr = {
                handlesubmit
            }
            return {
                loginUser,
                password,
                ...functionArr
            }
        }
    })
       
 
</script>