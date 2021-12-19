<template>
	<div class="leftNav">
		<n-scrollbar style="max-height: 100%;">
			<n-anchor :show-rail="false" :show-background="false">
				<n-anchor-link v-for="cato in categories" :title="cato.name" :href="'#'+cato.id" :key="cato.id" />
			</n-anchor>
		</n-scrollbar>
	</div>
</template>

<script>

	export default{
		name:'LeftNav',
		props:['categories']
	}
	
</script>

<style scoped>
	.leftNav {
		grid-area: nav;
		margin-right: 5px;
		overflow: scroll;
		overflow-x: hidden;
		overflow-y: hidden;
		border-right: 1px solid lightgray;
		/* background-color: #d3d5d8; */
	}

	.n-anchor-link {
		height: 40px;
		border-bottom: 1px solid lightgray;
		align-items: center;
		justify-content: center;
	}
</style>
