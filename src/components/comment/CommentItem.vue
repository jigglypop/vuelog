<template>
    <div>
        <h4>{{ item.user.username }}</h4>
        <h4>{{ item.content }}</h4>
        <h4>{{ item.createdAt }}</h4>
        <div v-if="item.user.username === username">
            <button @click="onCommentDelete">X</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CommentItem extends Vue {
    @Prop() item : any
    username = ''
    created() {
        const user = localStorage.getItem('user')
        if (user){
            this.username = JSON.parse(user).username
        }
    }
    onCommentDelete(){
        this.$emit('onCommentDelete', this.item._id );
    }
}
</script>

<style scoped>
</style>