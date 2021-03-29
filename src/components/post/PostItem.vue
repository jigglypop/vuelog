<template>
    <div>
        <h1>{{ item.title }}</h1>
        <h4 v-html="item.content"></h4>
        <h4>{{ item.createdAt }}</h4>
        <h4>{{ item.user.username }}</h4>
        <div v-if="username === item.user.username">
            <router-link :to="{ name:'Update', params: { _id : item._id } }"><h4>업데이트</h4></router-link>
            <button @click="onDelete">삭제</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class PostItem extends Vue {
    @Action readonly REMOVE: any
    @Prop() item : any
    username = ''

    created() {
        const user = localStorage.getItem('user')
        if (user){
            this.username = JSON.parse(user).username
        }
    }

    async onDelete() {
        const user = localStorage.getItem('user')
        if (user){
            await this.REMOVE({ postId : this.$route.params._id, token: JSON.parse(user).token  })
            await this.$router.push('/')
        }
    }
}
</script>

<style scoped>
</style>