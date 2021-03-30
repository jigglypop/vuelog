import Home from '../pages/Home.vue'
import MainHeader from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export const HomeRouters = [
    {
        path:'/',
        name:'Home',
        components:{
            header: MainHeader,
            default: Home,
            footer: Footer
        }
    }
]