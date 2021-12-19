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
		margin: 5px 5px;
		overflow: scroll;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	.n-anchor-link {
		height: 40px;
		align-items: center;
		justify-content: center;
	}
</style>
