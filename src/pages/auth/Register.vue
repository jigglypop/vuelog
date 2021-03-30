<template>
    <div class="authdiv">
        <div class="inner">
            <h1 class="title">VUELOG</h1>
            <h1 class="undertitle">회원가입</h1>
            <register-form @submit="onSubmit" :registerErr="registerError"/>
            <h4>이미 회원이신가요? <router-link :to="{ name:'Login' }">로그인</router-link></h4>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RegisterForm from '@/components/auth/RegisterForm.vue'

@Component({
    components:{
        RegisterForm
    }
})
export default class Register extends Vue {
    registerState = {
        user: {
            token: ''
        }
    };
    registerError = '';

    async onSubmit(payload: { username: string, email: string, password: string, passwordConfirm: string }) {
        if (payload.password === payload.passwordConfirm){
            await this.$store.dispatch("REGISTER",payload)
            this.registerState = await this.$store.state.register.data
            this.registerError = await this.$store.state.register.error
            
            if (this.registerState !== null){
                localStorage.setItem('user', JSON.stringify(this.registerState.user))
                await this.$store.dispatch("CHECK", { token : this.registerState.user.token })
                await this.$router.push('/')
            }
        } else{
            this.registerError = "비밀번호와 확인 비밀번호가 다릅니다. 다시 확인해주세요"
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
        margin: 10%;
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