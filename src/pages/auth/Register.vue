<template>
    <div align="center">
        <h2>회원가입</h2>
        <register-form @submit="onSubmit"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import { State, Action } from 'vuex-class'

@Component({
    components:{
        RegisterForm
    }
})
export default class Register extends Vue {
    @Action readonly REGISTER: any

    onSubmit(payload: { username: string, email: string, password: string }) {
        this.REGISTER(payload)
    }
}

</script>