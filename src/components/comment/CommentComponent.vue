<template>
    <div>
        <div v-for="comment in comments" :key="comment._id">
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

</style>