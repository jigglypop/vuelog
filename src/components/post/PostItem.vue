<template>
    <div>
        <h4>{{ item.username }}</h4>
        <h1>{{ item.title }}</h1>
        <h4 v-html="item.content"></h4>
        <h4>{{ item.createdAt }}</h4>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PostItem extends Vue {
    @Prop() item : any
}

</script>

<style scoped>

</style>