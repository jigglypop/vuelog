<template>
    <form @submit.prevent="submit">
        <input type="text" v-model="username" />
        <input type="email" v-model="email" />
        <input type="password" v-model="password" />
        <input type="password" v-model="passwordConfirm" />
        <button type="submit"><h4>회원가입</h4></button>
        <h4 v-if="registerErr !== null">{{ registerErr }}</h4>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class RegisterForm extends Vue {

    @Prop() registerErr = ''

    username = '';
    email = '';
    password = '';
    passwordConfirm = '';

    submit(){
        const { username, email, password, passwordConfirm  } = this;
        this.$emit('submit', { username, email, password, passwordConfirm });
    }
}

</script>

<style scoped>
    input {
        font-size: 1rem;
        outline: none;
        padding: 1rem;
        margin-bottom: 1rem;
        width: 100%;
        box-sizing: border-box;
        border-style: solid;
        border-image-slice: 1;
        background: none;
        border-color: white;
        color: white;
    }
    
    .errormsg{
        color: red;
        text-align: center;
        font-size: 0.875rem;
        margin-top: 1rem;
    }
    button{
        background: linear-gradient(45deg, #8E2DE2 30%, #4A00E0 90%);
        border: 0;
        border-radius: 3;
        box-shadow: 0 3px 5px 2px rgba(0, 0, 0, .3);
        color: white;
        margin: 10px;
        height: 40;
        cursor: pointer;
    }
    button h4{
        margin: 0;
        padding: 10px;
        font-size: 15px;
        font-weight: 800;
        text-shadow: 2px 2px 2px gray;
    }
</style>