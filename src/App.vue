<template>
	<div id="containner">
		<app-header></app-header>
		<left-nav :categories="categories"></left-nav>
		<show-buildings></show-buildings>
	</div>
</template>

<script>
	import AppHeader from './components/AppHeader.vue'
	import LeftNav from './components/LeftNav.vue'
	import ShowBuildings from './components/ShowBuildings.vue'

	export default {
		name: 'App',
		
		components: {
			AppHeader,
			LeftNav,
			ShowBuildings
		},
		data(){
			return{
				categories:[
					{
						name:'严大人',
						id:'yandaren',
					},
					{
						name:'梅山七怪',
						id:'meishanqiguai'
					}
					
				]
			}
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	#containner {
		display: grid;
		grid-template-columns: 120px auto;
		grid-template-rows: 70px auto;
		grid-template-areas:
			"header header"
			"nav content";

		width: 400px;
		height: 700px;
		margin: 100px auto;
		border-radius: 25px;
		overflow: hidden;
		box-shadow: lightgrey 0px 0px 10px;
	}

</style>
