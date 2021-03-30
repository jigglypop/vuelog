<template>
    <div>
        <div v-if="getList.data !== null" class="list-outer">
            <div v-if="getList.data.posts !== null" class="list-container">
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

<style scoped>
    .list-outer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 0 auto;
    }
    h1, h2, h3, h4, h5, h6, p {
        color: #fafafa;
        margin: 0;
    }
    a:link,
    a:visited,
    a:hover  { 
        color: #fafafa;
        text-decoration: none;
    }

    .list-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        @media screen and (max-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media screen and (max-width: 800px) {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>