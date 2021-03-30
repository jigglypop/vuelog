<template>
    <div class="post-outer">
        <div v-if="getPost.data !== null">
            <div v-if="getPost.data.post !== null">
                <post-item :item="getPost.data.post"></post-item>
                <write-comment-input @submit="onSubmit" :commentError="commentError"></write-comment-input>
            </div>
            <div v-if="getComment.data !== null">
                <div v-if="getComment.data.comments !== null">
                    <h4>댓글</h4>
                    <comment-component :comments="getComment.data.comments" @onCommentDelete="onCommentDelete"></comment-component>
                </div>
                <div v-else>
                    <h4>댓글이 없습니다.</h4>
                </div>
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
import PostItem from '../../components/post/PostItem.vue'
import WriteCommentInput from '../../components/comment/WriteCommentInput.vue'
import CommentComponent from '../../components/comment/CommentComponent.vue'

@Component({
    components:{
        PostItem,
        WriteCommentInput,
        CommentComponent
    },
    computed : {
        ...mapState({
            post: 'post',
            comment: 'comment',
            writecomment: 'writecomment'
        }),
    }
})
export default class Post extends Vue {
    post! : any
    comment! : any
    writecomment! : any
    removecomment! : any
    username = ''
    commentError = '';
    writecommentState = {}

    public get getPost(): any {
        return this.post
    }
    public get getComment(): any {
        return this.comment
    }
    public get getWriteComment(): any {
        return this.writecomment
    }
    public get getRemoveComment(): any {
        return this.removecomment
    }

    created() {
        const user = localStorage.getItem('user')
        if (user) this.username = JSON.parse(user).username
        this.$store.dispatch("POST", { postId : this.$route.params._id })
        this.$store.dispatch("COMMENT",{ postId : this.$route.params._id })
    }

    async onSubmit(payload: { content: string }) {
        const user = localStorage.getItem('user')
        if (user){
            await this.$store.dispatch("WRITECOMMENT", { content : payload.content, token: JSON.parse(user).token, postId: this.$route.params._id })
            this.writecommentState = await this.$store.state.writecomment.data
            this.commentError = await this.$store.state.writecomment.error
            if (this.writecommentState !== null){
                await this.$store.commit("CHANGE_COMMENTS", { data: this.writecommentState })
            }
        }
    }

    async onCommentDelete(commentId : string) {
        const user = localStorage.getItem('user')
        if (user){
            await this.$store.dispatch("REMOVECOMMENT", { commentId : commentId, token: JSON.parse(user).token, postId: this.$route.params._id })
            this.writecommentState = await this.$store.state.removecomment.data
            this.commentError = await this.$store.state.removecomment.error
            if (this.writecommentState !== null){
                await this.$store.commit("CHANGE_COMMENTS", { data: this.writecommentState })
            }      
        }
    }
}
</script>

<style scoped>
    .post-outer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5%;
        margin: 5%;
        background-color: #fafafa;
    }
</style>