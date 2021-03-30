<template>
    <div align="center">
        <h2>회원가입</h2>
        <register-form @submit="onSubmit" :registerErr="registerError"/>
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