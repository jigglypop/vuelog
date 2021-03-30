<template>
    <router-link :to="{ name:'Post', params: { _id : item._id } }">
        <div class="list-item">
            <p class="post-title">{{ item.title }}</p>
            <div v-html="item.content" class="inner-html"></div>
            <p>{{ item.createdAt }}</p>
            <div>
                <p>{{ item.user.username }}</p>
            </div>
        </div>
    </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PostItem extends Vue {
    @Prop() item : any

    mounted(): void {
        let colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
        // 랜덤
        const getRandom = (objects : any) => {
            return objects[Math.floor(Math.random() * objects.length)];
        };
        // 색 넣기
        const setColor = (el : any) => {
            const color = getRandom(colors);
            el.style.color = color;
            el.style.textShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
        };
        const listitems = document.querySelectorAll('.post-title')
            for (let i = 0;i<listitems.length;i++){
            setColor(listitems[i])
        }
    }
}

</script>

<style scoped>
    .list-item {
        width: 250px;
        margin: 30px;
        height: 300px;
        padding: 2%;
        cursor: pointer;
        background: #1a1a1c;
        box-shadow: 0 0 2px #1a1a1c, 0 0 10px #1a1a1c;
        transition: all 0.2s ease-in-out;

    }
    .list-item:hover {
        transform: scale(1.1);
    }
    .inner-html {
        height: 150px;
        overflow: hidden;
        color: white;
    }
</style>