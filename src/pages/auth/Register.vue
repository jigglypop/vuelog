<template>
    <div align="center">
        <h2>로그인</h2>
        <register-form @submit="onSubmit"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import { Action } from 'vuex-class'
import { AxiosResponse } from 'axios'

@Component({
    components:{
        RegisterForm
    }
})
export default class Register extends Vue {
    @Action readonly register: any

    onSubmit(payload: { username: string, password: string }) {
        this.register(payload).then((res: AxiosResponse) => {
            alert(JSON.stringify(res))
        })
    }
}

</script>