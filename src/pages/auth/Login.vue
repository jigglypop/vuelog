<template>
    <div class="authdiv">
        <div class="inner">
            <h1 class="title">VUELOG</h1>
            <h1 class="undertitle">로그인</h1>
            <login-form @submit="onSubmit" :loginErr="loginError" />
            <h4>처음 방문이신가요? <router-link :to="{ name:'Register' }">회원가입</router-link></h4>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LoginForm from '@/components/auth/LoginForm.vue'

@Component({
    components:{
        LoginForm
    }
})
export default class Login extends Vue {
    loginState = {
        user: {
            token: ''
        }
    };
    loginError = '';

    async onSubmit(payload: { username: string, password: string }) {
        await this.$store.dispatch("LOGIN", payload)
        this.loginState = await this.$store.state.login.data
        this.loginError = await this.$store.state.login.error
        
        if (this.loginState !== null){
            localStorage.setItem('user', JSON.stringify(this.loginState.user))
            await this.$store.dispatch("CHECK", { token : this.loginState.user.token })
            await this.$router.push('/')
        }
    }
}

</script>

<style scoped>
    .authdiv{
        background: linear-gradient(
            to right,
            rgba(18, 194, 233, 0.1),
            rgba(196, 113, 237, 0.1),
            #f64f591a
        );
        top:0 !important;
        height: 100vh;
        text-align: center;
        font-size: 15px;
        font-weight: 800;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 30px;
        font-weight: 800;
    }
    .title {
        margin-bottom: 10px;
        padding-bottom: 10px;
        font-size: 60px;
        font-weight: 800;
        color: white;
        background: linear-gradient(45deg, #8E2DE2 30%, #4A00E0 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: blink 1.5s ease-in-out infinite alternate;
    }
    .undertitle{
        margin: 10px;
        font-size: 40px;
        font-weight: 800;
        color: white;
    }
    .inner {
        padding: 10%;
        background: rgba(0, 0, 0, 0.5);
    }
    @keyframes blink {
      50% {
        opacity: 0.2;
      }
      100% {
        opacity: 1;
      }
    }
    a{
        color: #8E2DE2;
    }
</style>