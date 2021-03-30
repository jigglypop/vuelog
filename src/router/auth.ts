import MainHeader from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Register from '@/pages/auth/Register.vue'
import Login from '@/pages/auth/Login.vue'

export const AuthRouters = [
    {
        path:'/register',
        name:'Register',
        components:{
            header: MainHeader,
            default: Register,
            footer: Footer
        }
    },
    {
        path:'/login',
        name:'Login',
        components:{
            header: MainHeader,
            default: Login,
            footer: Footer
        }
    }
]