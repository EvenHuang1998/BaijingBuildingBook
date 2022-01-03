<template>
	<div id="containner">
		<app-header></app-header>
		<!-- <home-page></home-page> -->
		<router-view></router-view>
		<!-- <building-detail :building_id="1"></building-detail> -->
	</div>
</template>

<script>
	import AppHeader from './components/AppHeader.vue'
	// import HomePage from './components/HomePage.vue'
	
	export default {
		name: 'App',
		
		components: {
			AppHeader,
			// HomePage
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		scroll-behavior:smooth;
	}

	a{
		text-decoration: none;
		color: black;
	}
	#containner {
		/* display: grid;
		grid-template-columns: 120px auto;
		grid-template-rows: 70px auto;
		grid-template-areas:
			"header header"
			"nav content"; */
		display: grid;
		grid-template-rows: 70px auto;
		grid-template-areas:
			"header"
			"container";
		width: 400px;
		height: 700px;
		margin: 100px auto;
		border-radius: 25px;
		overflow: hidden;
		box-shadow: lightgrey 0px 0px 10px;
	}

</style>
