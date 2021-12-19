<template>
	<div class="searchInput">
		<n-input round placeholder="搜索">
			<template #prefix>
				<n-icon>
					<search-icon />
				</n-icon>
			</template>
		</n-input>
	</div>
</template>

<script>
	import {
		SearchOutline as SearchIcon
	} from '@vicons/ionicons5';
	export default {
		name: 'SearchInput',
		components: {
			SearchIcon
		}
	}
</script>

<style>
	.searchInput{
		margin: 5px 10px 10px 5px;
	}
</style>
