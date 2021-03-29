<template>
    <form @submit.prevent="submit">
        <table>
            <tr>
                <td>제목</td>
                <td><input type="text" v-model="title" /></td>
            </tr>
            <tr>
                <td>내용</td>
                <td><input type="text" v-model="content" /></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><button type="submit">글쓰기</button></td>
            </tr>
        </table>
        <h4 v-if="writeError !== null">{{ writeError }}</h4>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class WriteForm extends Vue {

    @Prop() writeError = ''

    title = '';
    content = '';

    submit(){
        const { title, content  } = this;
        this.$emit('submit', { title, content });
    }


}

</script>