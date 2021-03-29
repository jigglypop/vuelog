<template>
    <div align="center">
        <h2>포스트 리스트</h2>
        <div v-if="getList.data !== null">
            <div v-if="getList.data.posts !== null">
                <div v-for="post in getList.data.posts" :key="post._id">
                    <list-item :item="post"></list-item>
                </div>
            </div>
            <div v-else>
                <h4>포스트가 없습니다.</h4>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import ListItem from '../../components/list/ListItem.vue'

@Component({
    components:{
        ListItem
    },
    computed : {
        ...mapState({
            list: 'list'
        }),
    }
})
export default class List extends Vue {
    @Action readonly LIST: any
    list! : any
    public get getList(): any{
        return this.list
    }

    created() {
        this.LIST()
    }
}
</script>