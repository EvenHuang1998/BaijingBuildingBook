import { createRouter, createWebHistory } from "vue-router"
const BuildingDetail=()=>import("@/components/BuildingDetail.vue")
const HomePage=()=>import("@/components/HomePage.vue")
const routerHandler = createWebHistory()
const routes = [
    {
        path: "/",
        component:HomePage
    },
    {
        path: "/building/:buildingid",
        component: BuildingDetail
    }
]

const router = createRouter({
    history: routerHandler,
    routes
})

export default router