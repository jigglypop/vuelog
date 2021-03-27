<template>
    <div align="right">
        <router-link :to="{name:'Home'}">홈</router-link>
        <router-link :to="{name:'Register'}">회원가입</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MainHeader extends Vue {

}

</script>
<style scoped>
    a {
        margin: 10px;
    }
</style>