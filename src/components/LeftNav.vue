<template>
	<n-anchor :show-rail="showRail" :show-background="showBackground">
		<n-anchor-link title="基础用法" href="#basic" />
		<n-anchor-link title="忽略间隔" href="#ignore-gap" />
		<n-anchor-link title="固定" href="#affix" />
		<n-anchor-link title="滚动到" href="#scrollto" />
	</n-anchor>
</template>

<script>
	import {
		defineComponent,
		ref
	} from 'vue'

	export default defineComponent({
		name: 'LeftNav',
		setup() {
			return {
				showRail: ref(false),
				showBackground: ref(false)
			}
		}
	})
</script>

<style>
	.leftNav {
		grid-area: nav;
	}

	n-anchor-link {
		display: block;
		height: 40px;
	}
</style>
