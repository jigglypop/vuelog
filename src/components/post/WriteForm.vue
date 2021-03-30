<template>
    <form @submit.prevent="submit">
        <div class="label"><h4>제목을 입력해 주세요</h4></div>
        <input type="text" v-model="title" />
        <div class="label"><h4>내용을 입력해 주세요</h4></div>
        <textarea type="text" v-model="content" />
        <button type="submit"><h4>제출</h4></button>
        <h4 v-if="writeError !== null">{{ writeError }}</h4>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class WriteForm extends Vue {
    @Prop() writeError = ''
    title = '';
    content = '';
    submit(){
        const { title, content  } = this;
        this.$emit('submit', { title, content });
    }
}
</script>

<style scoped>
    .label {
        margin-left: 30px;
        display: flex;
        justify-content: flex-start;
        color: #1d1d1d;
    }
    h4 {
        font-size: 15px;
        font-weight: 800;
        color: #1d1d1d;
        margin: 0;
        padding: 0;
    }
    button h4 {
        font-size: 15px;
        font-weight: 800;
        color: white;
        margin: 10px;
    }
    span {
        cursor: pointer;
    }
    .item {
        display: inline-block;
    }
    .button {
        margin-left: 10px;
    }
    input {
        color: #1d1d1d;
        width: 95%;
        height: 40px;
        margin: 20px;
        border: 2px solid #1d1d1d;
        background-color: transparent;
        transition: 1s;
    }
    input[type="text"]:hover {
        background-color: transparent;
        box-shadow: 10px 10px 10px #414345;
    }
    input[type="text"]:focus {
        background-color: transparent;
        box-shadow: 10px 10px 10px #414345;
        outline-width: 0px;
    }
    textarea {
        width: 95%;
        height: 300px;
        margin: 20px;
        border: 2px solid #1d1d1d;
        background-color: transparent;
        box-shadow: 5px 5px 5px #414345;
        transition: 1s;
    }
    button {
        background: linear-gradient(45deg, #8e2de2 30%, #4a00e0 90%);
        border: 0;
        border-radius: 3px;
        box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
        font-size: 15px;
        font-weight: 600;
        width: 140px;
        cursor: pointer;
    }
</style>