<template>
    <div align="center">
        <h2>글쓰기</h2>
        <write-form @submit="onSubmit"  :writeError="writeError"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WriteForm from '@/components/post/WriteForm.vue'
import { Action } from 'vuex-class'
import { mapState } from 'vuex'

@Component({
    components:{
        WriteForm
    },
    computed: {
    ...mapState({
      check: 'check'
    }),
  },
})
export default class Write extends Vue {
    @Action readonly WRITE: any
    @Action readonly CHECK: any

    writeState = {
        post: {
            _id: ''
        }
    };
    writeError = '';
    check!: any;
    public get getCheck(): string {
        return this.check;
    }
    async onSubmit(payload: { title: string, content: string }) {
        const user = localStorage.getItem("user")
        if (user) {
            await this.WRITE({ 
                title: payload.title, 
                content: payload.content,
                token: JSON.parse(user).token
            })
        }
        this.writeState = await this.$store.state.write.data
        this.writeError = await this.$store.state.write.error
        await this.$router.push(`/post/${this.writeState.post._id}`)
    }
}

</script>