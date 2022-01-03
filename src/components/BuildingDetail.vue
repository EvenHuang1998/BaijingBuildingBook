<template>
    <div class="buildingDetail">
        <n-scrollbar style="min-height: 100%;">
            <h3>{{building_data.building_name}}</h3>
            <n-image 
                width="300"
                :src=building_data.building_img_url
            />
            <h3>尺寸</h3>
            <p>{{building_data.building_size}}</p>
            <h3>获取途径</h3>
            <p>{{building_data.building_access_way}}</p>
            <h3>推荐搭配</h3>
            <n-image v-for="(match,index) in building_match_list" 
            :key=index width="350" height="350" :src="match" />
        </n-scrollbar>
    </div>
    
</template>

<script>
export default {
    name:'BuildingDetail',
    data(){
        return{
            building_id:this.$route.params.buildingid,
            building_data:{},
            building_match_list:[]
        }
    },
    methods:{
        getBuildingDetail(){
            let that=this;
            this.axios.get("http://127.0.0.1:5000/building/getBuilding",{
                params:{
                    "buildingid":that.building_id
                }
            })
            .then(function(data){
                return data.data;
            })
            .then(function(data){
                data.building_img_url=require("../assets/buildings_image/"+data.building_img_url);
                that.building_data=data;
            })  
        },
        getMatch(){
            let that=this;
            this.axios.get("http://127.0.0.1:5000/match/getMatchOfBuilding",{
                params:{
                    "buildingid":that.building_id
                }
            })
            .then(function(data){
                return data.data.match_url_list;
            })
            .then(function(data){
                data.forEach(function(item,index,input){
                    input[index]=require("../assets/match_image/"+item);
                });
                that.building_match_list=data;
            })
        }
    },
    created(){
        this.getBuildingDetail();
        this.getMatch();
    }
}
</script>

<style scoped>
.buildingDetail{
    height: 100%;
    padding: 15px;
    overflow: scroll;
	overflow-y: hidden;
	overflow-x: hidden;
}

.n-image{
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
}

h3{
    line-height: 30px;
    padding: 5px 5px;
    margin: 10px 0px;
    background: lightgray;
    border-radius: 10px;
}
</style>