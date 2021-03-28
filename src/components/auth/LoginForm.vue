<template>
    <form @submit.prevent="submit">
        <table>
            <tr>
                <td>아이디</td>
                <td><input type="text" v-model="username" /></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="password" v-model="password" /></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><button type="submit">로그인</button></td>
            </tr>
        </table>
        <h4 v-if="loginErr !== null">{{ loginErr }}</h4>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LoginForm extends Vue {

    @Prop() loginErr = ''

    username = '';
    password = '';

    submit(){
        const { username, password  } = this;
        this.$emit('submit', { username, password });
    }


}

</script>