<template>
	<div class="showBuildings">
		<n-scrollbar style="max-height: 100%;">
			<search-input></search-input>
			<building-block :block_id='yandaren'></building-block>
		</n-scrollbar>

	</div>

</template>

<script>
	import SearchInput from './SearchInput.vue'
	import BuildingBlock from './BuildingBlock.vue'
	
	export default {
		name: 'ShowBuildings',
		props:["test_props"],
		components:{SearchInput,BuildingBlock},
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
