<template>
    <div class="homePage">
        <left-nav></left-nav>
        <show-buildings></show-buildings>
    </div>
</template>

<script>
import LeftNav from './LeftNav.vue'
import ShowBuildings from './ShowBuildings.vue'
export default {
    name:'HomePage',
    components:{
        LeftNav,
        ShowBuildings,
    }
}
</script>

<style scoped>
.homePage{
	display: grid;
    grid-area: container;
	grid-template-columns: 120px auto;
	grid-template-areas:
	"nav content";
    height: 630px;
	width: 400px;
	/* overflow: hidden; */
}
</style>