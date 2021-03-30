<template>
    <div class="auth-wrapper">
        <div class="auth-page">
            <div class="label-title">
                <h1>글쓰기</h1>
            </div>
            <write-form @submit="onSubmit"  :writeError="writeError"/>
        </div>
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

<style scoped>
.auth-page {
  text-align: center;
  align-content: center;
  align-items: center;
  padding: 10px;
  margin: auto;
  min-height: 70vh;
  margin-bottom: 100px;
  box-shadow: 10px 10px 10px black;
  background: #fafafa;
}

.auth-wrapper {
  padding-left: 1rem;
  padding-right: 1rem;
  width: 80vw;
  margin: 0 auto;
  padding-top: 80px;
}
@media (max-width: 1024px) {
    .auth-wrapper {
        width: 768px;
    }
}
@media (max-width: 768px) {
    .auth-wrapper {
        width: 100%;
    }
}
</style>