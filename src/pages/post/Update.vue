<template>
    <div align="center">
        <h2>업데이트</h2>
        <update-form @submit="onSubmit"  :updateError="updateError" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UpdateForm from '@/components/post/UpdateForm.vue'
import { Action } from 'vuex-class'
import { mapState } from 'vuex'

@Component({
    components:{
        UpdateForm
    },
    computed: {
    ...mapState({
      check: 'check'
    }),
  },
})
export default class Update extends Vue {
    @Action readonly UPDATE: any
    @Action readonly CHECK: any

    updateState = {
        post: {
            _id: ''
        }
    };
    updateError = '';
    check!: any;
    public get getCheck(): string {
        return this.check;
    }

    async onSubmit(payload: { title: string, content: string }) {
        const user = localStorage.getItem("user")
        if (user) {
            await this.UPDATE({ 
                title: payload.title, 
                content: payload.content,
                token: JSON.parse(user).token,
                postId : this.$route.params._id
            })
        }
        this.updateState = await this.$store.state.update.data
        this.updateError = await this.$store.state.update.error
        await this.$router.push(`/post/${this.updateState.post._id}`)
    }
}

</script>