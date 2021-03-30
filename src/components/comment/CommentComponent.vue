<template>
    <div class="comment-div">
        <div v-for="comment in comments" :key="comment._id" class="commentitems-div">
            <comment-item :item="comment" @onCommentDelete="onCommentDelete"></comment-item>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CommentItem from './CommentItem.vue'

@Component({
    components:{
        CommentItem
    }
})
export default class CommentComponent extends Vue {
    @Prop() comments : any

    onCommentDelete( commentId: string ) {
        this.$emit('onCommentDelete', commentId );
    }
}
</script>

<style scoped>
    .comment-div {
        padding: 5%;
        position: relative;
    }

    .commentitem-div {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-template-rows: 1fr 1fr;
        margin-bottom: 5px;
    }

    @media screen and (max-width: 1200px) {
        .commentitem-div {
            grid-template-columns: 130px 1fr;
        }
    }
    @media screen and (max-width: 800px) {
        .commentitem-div {
            grid-template-columns: 110px 1fr;
        }
    }
</style>