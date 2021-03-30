<template>
  <div class="jb-wrap">
    <div class="jb-image">
      <model-gltf
        :backgroundColor="bgColor"
        :backgroundAlpha="bgAlpha"
        :cameraPosition="cameraPosition"
        :rotation="rotation"
        @on-load="onLoad"
        class="gltfouter"
        src="star/scene.gltf"
      >
      </model-gltf>
    </div>
    <div class="jb-text">
      <h4 class="centertext">VUELOG</h4>
      <h4 class="centerinfo">뷰로그에 오신 여러분 모두 환영합니다</h4>
    </div>
  </div>
</template>

<script>
import { ModelGltf } from "vue-3d-model";

export default {
  data() {
    return {
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      bgColor: "#000000",
      bgAlpha: 0.5,
      cameraPosition: { x: -300, y: 100, z: 100 },
    };
  },
  methods: {
    onLoad() {
      this.rotate();
    },
    rotate() {
      this.rotation.y += 0.01;
      requestAnimationFrame(this.rotate);
    },
  },
  components: {
    ModelGltf,
  },
};
</script>

<style scoped>
.jb-wrap {
  width: 100%;
  margin: 10px auto;
  border: 1px solid #000000;
  position: relative;
}
.jb-wrap .gltfouter {
  width: 100%;
  vertical-align: middle;
}
.jb-text {
  padding: 5px 10px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.centertext {
  font-size: 60px;
}
h1, h2, h3, h4, h5, h6, p {
  color: #fafafa;
  margin: 0;
}
a:link,
a:visited,
a:hover  { 
  color: #fafafa;
  text-decoration: none;
}
</style>
