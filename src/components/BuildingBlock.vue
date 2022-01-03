<template>
	<div class="buildingBlock"><h3 :id="block_id">{{block_title}}</h3>
	<n-grid :cols="2">
		<n-gi v-for="(building_info,index) in building_list" :key="index">
			<div class="singleBuilding">
				
				<router-link :to="`/building/${building_info.building_id}`">
				<n-image width="85" height="65" :src="building_info.building_img_url" preview-disabled/>
					<p>{{building_info.building_name}}</p>
				</router-link>
			</div>
			
		</n-gi>
	</n-grid>
	</div>
	
</template>

<script>
	export default {
		name: 'BuildingBlock',
		props:["block_id","block_title"],
		data() {
			return {
				building_list: []
			}
		},
		methods:{
			get_block_buildings(){
				let that=this;
				this.axios.get("http://127.0.0.1:5000/buildingcate/getBuildingListOfCategory",{
					params:{
						"cateid":that.block_id
					}
				})
				.then(function(data){
					return data.data;
				})
				.then(function(data){
					data.forEach(ele=>{
						ele.building_img_url=require("../assets/buildings_image/"+ele.building_img_url);
					})
					that.building_list=data;
				})
			}
		},
		created(){
			this.get_block_buildings();
		}
	}
</script>

<style scoped>
	.singleBuilding {
		margin-top: 8px;
		display: grid;
		align-items: center;
		justify-content: center;
	}
</style>
