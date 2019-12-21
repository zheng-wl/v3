<template>
  <div class="scss">
    <h1 id="asd">
		123456
		<span>lv</span>
		<span class="none" >none</span>
		<span class="block">block</span>
		
	</h1>
	<div class="box">74</div>
	<div class="box1"></div>
	
	<div class="text">12</div>
	<div class="box3"></div>
	
	
	<a href="" class="Index">1586</a>
	
	<div class="border-0">0</div>
	<div class="border-1">1</div>
	<div class="border-2">2</div>
	<div class="border-3">3</div>
	
	<div class="sider">自定义函数</div>
	<div id="ceshi"> 测试</div>
	
  </div>
</template>
<script>
	
	import { Component, Prop, Vue } from 'vue-property-decorator';
	export default class Sass extends Vue {

	}
</script>
<style lang="scss" scoped>
	 
	@import  '@/assets/ceshi';
	// @import  '../assets/ceshi.scss'
	// 混合 该特性在添加浏览器兼容性前缀的时候非常有用
	@mixin border-radius($radius){
		border-radius:$radius;
		-ms-border-radius:$radius;
		-moz-border-radius: $radius;
		-webkit-border-radius: $radius;
	}
	
	.box3{
		@include border-radius(10px);
	}
	
	
	$primary-color: red;
	$primary-size:15px;
	$primary-none:none;
	$primary-block:block;
	//计算
	$width1: 2px;
	$width2: 2px;
	//复用  
	%message-common{
		border:1px solid #ccc;
	    width:10px;
		height:10px;
		background-color:lightpink;
	}
	
    #asd{
		color: $primary-color;
		font-size:$primary-size;
		span{
			color:green;
		}
		.none{
			display:none;
		}
		.block{
			display: block;
		}
		
	}
	.box{width:$width1+$width2;height:10px;background-color:gray;}
	.box1{ 
		@extend %message-common;
	}
	
	.text{
		@if 1+1==2{
			font-size: 25px;
		}@else{
			font-size: 26px;
		}
	}
	.Index{
		//"&"关键字在CSS规则中引用父级选择器 例如在嵌套使用伪类选择器的场景下
		 &:hover { color: red; }
	}
	
	//for 循环
	@for $i from 1 to 10 {
		@if($i==1){
			.border-#{$i}{
				 border: #{$i}px solid hotpink;
				 margin-top: 20px;
			}
		}@else if($i==2){
			.border-#{$i}{
				 border: #{$i}px solid red;
				 margin-top: 20px;
			}
		}@else{
			.border-#{$i}{
				 border: #{$i}px solid green;
				 margin-top: 20px;
			}
		}
		
	}
	//自定义函数
	@function double($n){
		@return $n*2
	}
	
	.sider{
		width: double(5px);
	}
	
	
	//1. 定义变量 $
	//2. 计算
	//3.复用 % @extend
	//4.混合 @mixin @include
	//5 自定义函数
	//6 判断 @if{}@else{}
	//7.for循环
    
</style>
