<template>
  <div align="center">
      <h1>VueLog에 오신 것을 환영합니다</h1>
      <p>{{ getTime() }}</p>
      <list></list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from './post/List.vue'

@Component({
    components:{
        List
    }
})
export default class Home extends Vue{
    public getTime() {
        return new Date().toString()
    }
}
</script>
