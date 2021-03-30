<template>
  <div class="home">
    <gltf></gltf>
    <list></list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from './post/List.vue'
import * as THREE from 'three'
import Gltf from '../components/common/Gltf.vue'

@Component({
    components:{
        List,
        Gltf
    }
})
export default class Home extends Vue{
    mounted() {
        let camera: any;
        let scene: any; 
        let renderer: any;
        let geometry: any;
        let material: any;
        let mesh: any;

        const init = async ()=> {
            camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
            camera.position.z = 1;
            scene = new THREE.Scene();
            geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
            material = new THREE.MeshNormalMaterial();
            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            // const loader = new GLTFLoader();
            // loader.load('outer.gltf', ( gltf )=> {
            //     scene.add(gltf.scene)
            // })
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);

            const maincanvas = document.getElementById('maincanvas')
            if (maincanvas){
                maincanvas.appendChild(renderer.domElement);
            }

        }
        const animate = ()=> {
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.02;
            renderer.render(scene, camera);
        }
        init()
        animate();
    }               
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