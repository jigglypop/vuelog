<template>
  <div class="home">
    <gltf></gltf>
    <list></list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from './post/List.vue'
import Gltf from '../components/common/Gltf.vue'

@Component({
    components:{
        List,
        Gltf
    }
})
export default class Home extends Vue{            
}
</script>

<style scoped>
    .mainwrap {
        width: 40%;
        margin: 10px auto;
    }
    .maincanvas{
        width: 100%;
        height: 100vh;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    .maincanvaswrapper{
        width: 40%;
        margin: 10px auto;
        position: relative;
    }
    .maintextwrapper{
        padding: 5px 10px;
        z-index: 1;
        text-align: center;
        position: absolute;
        top: 50vh;
        left: 50%;
        transform: translate( -50%, -50% );

    }
    .maintext{
        font-size: 50px;
        font-weight: 800;
        color: white;
    }
</style>