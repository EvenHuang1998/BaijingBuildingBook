<template>
	<div class="appHeader">
		<h2>百景建筑图鉴</h2>
	</div>
</template>

<script>
  export default{
    name:'AppHeader'
  }
</script>

<style scoped>
	.appHeader{
		grid-area: header;
		display: flex;
		align-items: center;
		padding-left: 15px;
		border-bottom: 1px solid lightgray;
	}
</style>