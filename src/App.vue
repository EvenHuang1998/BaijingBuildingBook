<template>
	<div id="containner">
		<app-header></app-header>
		<left-nav></left-nav>
		<div class="showBuildings"></div>
	</div>
</template>

<script>
	import AppHeader from './components/AppHeader.vue'
	import LeftNav from './components/LeftNav.vue'
	export default {
		name: 'App',
		components: {
			AppHeader,
			LeftNav
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
		background-color: antiquewhite;
		margin: 100px auto;
		border-radius: 25px;
		overflow: hidden;
		box-shadow: lightgrey 0px 0px 10px;
	}


	.showBuildings {
		background-color: cadetblue;
		grid-area: content
	}
</style>
