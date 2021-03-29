<template>
    <form @submit.prevent="submit">
        <table>
            <tr>
                <td>댓글 쓰기</td>
                <td><input type="text" v-model="content" /></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><button type="submit">댓글 쓰기</button></td>
            </tr>
        </table>
        <h4 v-if="commentError !== null">{{ commentError }}</h4>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class WriteCommentInput extends Vue {

    @Prop() commentError = ''

    content = ''
    submit(){
        const { content  } = this;
        this.$emit('submit', { content });
    }
}

</script>