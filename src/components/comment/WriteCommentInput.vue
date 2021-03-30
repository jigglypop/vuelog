<template>
    <form @submit.prevent="submit" class="writecomment-div">
        <input type="text" v-model="content" />
        <button type="submit"><h4>댓글 쓰기</h4></button>
        <h4 v-if="commentError !== null">{{ commentError }}</h4>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class WriteCommentInput extends Vue {

    @Prop() commentError = ''

    content = ''
    submit(){
        const { content  } = this;
        this.$emit('submit', { content });
    }
}

</script>

<style scoped>
    .writecomment-div {
        background: rgba(0, 0, 0, 0.05);
        padding: 3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .writecomment-div h1 {
        font-size: 13px;
        font-weight: 800;
        color: black;
    }

    input {
        font-size: 1rem;
        outline: none;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        height: 20vh;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        border: 3px solid gray;
        background-color: white;
    }
    
    .writecomment-div button {
        transition: all 0.2s ease-in-out;
        transition: 0.5s;
        border: 2px solid #ff416c;
        background-color: transparent;
        padding: 0;
        width: 100px;
        cursor: pointer;
    }

    h4 {
        font-size: 13px;
        color: #ff416c;
    }

</style>