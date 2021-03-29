import MainHeader from '@/components/common/MainHeader.vue'
import Footer from '@/components/common/Footer.vue'
import Post from '@/pages/post/Post.vue'
import Write from '@/pages/post/Write.vue'
import Update from '@/pages/post/Update.vue'

export const PostRouters = [
    {
        path:'/post/:_id',
        name:'Post',
        components:{
            header: MainHeader,
            default: Post,
            footer: Footer
        }
    },
    {
        path:'/write',
        name:'Write',
        components:{
            header: MainHeader,
            default: Write,
            footer: Footer
        }
    },
    {
        path:'/update/:_id',
        name:'Update',
        components:{
            header: MainHeader,
            default: Update,
            footer: Footer
        }
    },
]