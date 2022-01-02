<template>
	<div class="showBuildings">
		<n-scrollbar style="max-height: 100%;">
			<search-input></search-input>
			<building-block v-for="cate in categories" :block_id="cate.cate_id" :block_title="cate.cate_name" :key="cate.id"></building-block>
		</n-scrollbar>
	</div>
</template>

<script>
	import SearchInput from './SearchInput.vue'
	import BuildingBlock from './BuildingBlock.vue'
	
	export default {
		name: 'ShowBuildings',
		components:{SearchInput,BuildingBlock},
		data(){
			return {
				categories:[],
				buildings:[]
			}
		},
		methods:{
			get_categoris(){
				let that=this;
				this.axios.get('http://127.0.0.1:5000/category/getAllCategories')
				.then(function(data){
					return data.data;
				})
				.then(function(data){
					that.categories=data;
				})
			},
			get_homepage_buildings(){
				let that=this;
				this.axios.get('http://127.0.0.1/building/getHomepageBuildings')
				.then(function(data){
					return data.data;
				})
				.then(function(data){
					that.buildings=data;
				})
			}
		},
		created(){
			this.get_categoris();
			this.get_homepage_buildings()
		}

	}
</script>

<style scoped>
	.showBuildings {
		grid-area: content;
		margin: 5px 5px;
		overflow: scroll;
		overflow-y: hidden;
		overflow-x: hidden;
	}
	.singleBuilding {
		height: 108px;
		margin: 5px 5px 5px 0px;
		background-color: rgba(0, 128, 0, 0.12);
	}
</style>
