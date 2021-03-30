<template>
    <div align="center">
        <h2>로그인</h2>
        <login-form @submit="onSubmit" :loginErr="loginError" />
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