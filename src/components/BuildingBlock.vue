<template>
	<h3 :id="block_id">{{block_title}}</h3>
	<n-grid :cols="2">
		<n-gi v-for="(building_info,index) in building_list" :key="index">
			<div class="singleBuilding">
				<n-image width="85" height="65" :src="building_info.img" />
				<p>{{building_info.building_name}}</p>
			</div>
		</n-gi>

	</n-grid>
</template>

<script>
	export default {
		name: 'BuildingBlock',
		props:["block_id"],
		data() {
			return {
				block_title: '严大人',
				building_list: [{
						img: require('@/assets/buildings_image/xuewuyeqi.png'),
						building_name: '雪屋夜棋'
					},
					{
						img: require('@/assets/buildings_image/canxuelouyuan.png'),
						building_name: '残雪楼园'
					}
				]

			}

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
