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
                <td colspan="2" align="center"><button type="submit">업데이트</button></td>
            </tr>
        </table>
        <h4 v-if="updateError !== null">{{ updateError }}</h4>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class UpdateForm extends Vue {
    @Action readonly POST: any

    @Prop() updateError = ''

    title = '';
    content = '';
    postState = {
        post: {
            title: '',
            content: ''
        }
    };
    postError = '';


    post! : any
    public get getPost(): any {
        return this.post
    }

    async created() {
        await this.POST({ postId : this.$route.params._id })
        this.postState = await this.$store.state.post.data
        this.postError = await this.$store.state.post.error
        if (this.postState) {
            this.title = this.postState.post.title
            this.content = this.postState.post.content
        }
    }

    submit(){
        const { title, content  } = this;
        this.$emit('submit', { title, content });
    }


}

</script>