<template>
    <form @submit.prevent="submit">
        <table>
            <tr>
                <td>아이디</td>
                <td><input type="text" v-model="username" /></td>
            </tr>
            <tr>
                <td>이메일</td>
                <td><input type="email" v-model="email" /></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="password" v-model="password" /></td>
            </tr>
            <tr>
                <td>비밀번호 확인</td>
                <td><input type="password" v-model="passwordConfirm" /></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><button type="submit">회원가입</button></td>
            </tr>
        </table>
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