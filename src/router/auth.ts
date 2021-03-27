import MainHeader from '@/components/common/MainHeader.vue'
import Footer from '@/components/common/Footer.vue'
import Register from '@/pages/auth/Register.vue'

export const AuthRouters = [
    {
        path:'/register',
        name:'Register',
        components:{
            header: MainHeader,
            default: Register,
            footer: Footer
        }
    }
]