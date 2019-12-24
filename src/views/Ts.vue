<template>
	<div>
		
		ts
		{{hello}}-{{name}}-{{a1}}

		<button @click="print">8</button>
		<input type="text" v-model="ValA">
	</div>
</template>
<!-- 文件名首字母要大写 -->
<script lang="ts">
	// import { Component, Prop, Vue } from 'vue-property-decorator';
	import { Component, Vue,Provide ,Emit,Watch,Prop,Model,Inject } from "vue-property-decorator";
	@Component({//Component组件装饰器，用于增加一些全局的配置，如filters过滤器等
			components: {}//components这里放置一些全局的组件
	})
	export default class HelloWorld extends Vue {
		//这里写钩子函数，监听器，data，methods，计算属性等
        //可以在使用typescript的一些类的private public readonly get set等
		@Provide() private name:number = 1; //定制属性，替换data,以后正常情况下直接这样使用，当然用data也是可以的，但是不推荐
		
		private hello:string = "hello";
		
		a1:number= 1;

		print():void{
			console.log("8")
		}
		
		//计算属性

		get ValA():number{
			let a1:number = 2 ;
			console.log(a1);
			return a1;
		}


        mounted(){
		  let a2:number =1;
			console.log(this.a1);
			console.log('加载成功');
		}

	}

	
	</script>



<style>
	


</style>