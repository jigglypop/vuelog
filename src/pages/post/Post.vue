<template>
    <div align="center">
        <div v-if="getPost.data !== null">
            <div v-if="getPost.data.post !== null">
                <post-item :item="getPost.data.post"></post-item>
                <write-comment-input @submit="onSubmit" :commentError="commentError"></write-comment-input>
            </div>
            <div v-else>
                <h4>포스트가 없습니다.</h4>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import PostItem from '../../components/post/PostItem.vue'
import WriteCommentInput from '../../components/comment/WriteCommentInput.vue'

@Component({
    components:{
        PostItem,
        WriteCommentInput
    },
    computed : {
        ...mapState({
            post: 'post'
        }),
    }
})
export default class Post extends Vue {
    @Action readonly POST: any
    @Action readonly WRITECOMMENT: any
    post! : any
    public get getPost(): any {
        return this.post
    }
    created() {
        this.POST({ postId : this.$route.params._id })
    }

    commentState = {
        
    };

    commentError = '';
    async onSubmit(payload: { content: string }) {
        const user = localStorage.getItem('user')
        if (user){
            await this.WRITECOMMENT({ content : payload.content, token: JSON.parse(user).token, postId: this.$route.params._id })
        }
    }
}
</script>