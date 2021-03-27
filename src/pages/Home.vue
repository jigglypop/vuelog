<template>
  <div align="center">
      <h1>VueLog에 오신 것을 환영합니다</h1>
      <p>{{ getTime() }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue{
    public getTime() {
        return new Date().toString()
    }
}
</script>
