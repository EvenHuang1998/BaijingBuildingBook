<template>
	<h3 :id="block_id">{{block_title}}</h3>
	<n-grid :cols="2">
		<n-gi v-for="(building_info,index) in building_list" :key="index">
			<div class="singleBuilding">
				<n-image width="85" height="65" :src="building_info.img_src" />
				<p>{{building_info.building_name}}</p>
			</div>
		</n-gi>
	</n-grid>
</template>

<script>
	export default {
		name: 'BuildingBlock',
		props:["block_id","block_title"],
		data() {
			return {
				building_list: [{
						img_src: 'xuewuyeqi.png',
						building_name: '雪屋夜棋'
					},
					{
						img_src: 'canxuelouyuan.png',
						building_name: '残雪楼园'
					}
				]
			}
		},
		created(){
			this.building_list.forEach(ele=>{
				ele.img_src=require('@/assets/buildings_image/'+ele.img_src);
			})
			
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
