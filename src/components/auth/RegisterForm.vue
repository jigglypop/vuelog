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
                <td><input type="password" v-model="password" /></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><button type="submit">회원가입</button></td>
            </tr>
        </table>
    </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RegisterForm extends Vue {

    username = '';
    email = '';
    password = '';

    submit(){
        const { username, email, password  } = this;
        this.$emit('submit', { username, email, password });
    }
}

</script>