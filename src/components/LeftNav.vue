<template>
	<div class="leftNav">
		<n-scrollbar style="max-height: 100%;">
			<n-anchor :show-rail="false" :show-background="false">
				<n-anchor-link  v-for="cate in nav_categories" :title="cate.cate_name"
					:href="'#'+cate.cate_id" :key="cate.cate_id" />
			</n-anchor>
		</n-scrollbar>
	</div>
</template>

<script>
	export default {
		name: 'LeftNav',
		data(){
			return{
				nav_categories:[]
			}
		},
		created(){
			let that=this;
			this.axios.get('http://localhost:5000/category/getAllCategories')
			.then(function(data){
				return data.data;
			})
			.then(function(data){
				that.nav_categories=data;
			})
		}
	}
</script>

<style scoped>
	.leftNav {
		/* grid-area: nav; */
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
