<template>
    <div>
        <div>count: {{count}}</div>  
        <div>counts :{{counts}}</div>
        <div>count1:{{count1}}</div>
        <div>computed: {{computedCount}}</div>
        <div>computed1: {{computedCount1}}</div>
        <div><button @click="add()"></button></div>
        <div>wat:{{wat}}</div>
        <div>wat1:{{wat1}}</div>
        <div><button @click="addWat()">wat</button> </div>
        <div><button @click="addWat1()">wat1</button> </div>
        <div></div>
        <div><button @click="addwa()">wat1+wat</button> </div>
        <div><button @click="print()">print</button></div>

    </div>
</template>
<script lang='ts'>
import { ref , reactive ,toRefs ,computed,Ref ,watch,onMounted} from "@vue/composition-api";
function abc(val:any){
    let a = val;
    return a+=10;
}


export default{
    setup(){
        let count = 1;
        const counts = ref(1);
        const state = reactive({count1:1});
        const computedCount = computed(()=>abc(state.count1))
        const computedCount1 = computed(()=>{
            let b = counts.value;
            return b+=5;
        })
    
        const wat = ref(1);
        const wat1 = ref(1);

        let add = ()=>{
            counts.value +=1;
            count +=1;
            state.count1 +=1;
        }
        //-----------------------
        let addWat = () =>{
            wat.value+=1;
        }
        
        let addWat1 = () =>{
            wat1.value +=1;
        }
        let addwa = () =>{
            wat1.value +=1;
            wat.value +=1;
        }
        watch(()=>wat.value*2,val=>{
            console.log(`count*2 id ${val}`);
        })
        watch(()=>wat1.value*3,val=>{
            console.log(val)
            console.log('wat1发生了改变')
        })

        function print(){
            console.log('print')
        }

        // watch(()=>{
        //   let a = wat.value;
        //   console.log("watch执行")
        //   console.log(a+=10);
        // })
        console.log("初始化执行");
        onMounted(()=>{
            console.log("mounted 加载成功")
        })

        let functionObj =  {add,addWat,addWat1,addwa,print}

        return {
                count,
                counts,
                ...toRefs(state),
                computedCount,
                computedCount1,
                wat,
                wat1,
                ...functionObj
               
                
        }
    }
}

//cannot 
//assign 
//because 
//constant
//computed
//watch

// beforeCreate -> 使用setup()
// created -> 使用 setup()
// beforeMount -> onBeforeMount
// mounted -> onMounted
// beforeUpdate -> onBeforeUpdate
// updated -> onUpdated
// beforeDestroy -> onBeforeUnmount
// destroyed -> onUnmounted
// errorCaptured -> onErrorCaptured




</script>