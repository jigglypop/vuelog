<template>
    <div class="commentitem-div">
        <div class="commentname-div">
            <h4>{{ item.user.username }}</h4>
        </div>
        <div class="commentcontent-div">
            <h4>{{ item.content }}</h4>
        </div>
        <div class="commentupper-div">
            <h4>{{ item.createdAt }}</h4>
            <div v-if="item.user.username === username" class="cancel">
                <h4 @click="onCommentDelete">X</h4>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CommentItem extends Vue {
    @Prop() item : any
    username = ''
    created() {
        const user = localStorage.getItem('user')
        if (user){
            this.username = JSON.parse(user).username
        }
    }
    onCommentDelete(){
        this.$emit('onCommentDelete', this.item._id );
    }
}
</script>

<style scoped>
    .commentitems-div {
        grid-row: 2/3;
    }

    .commentitem-div {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 5px;

    }

    .commentupper-div {
        display: flex;
        justify-content: space-between;
        grid-column: 2/3;
        grid-row: 1/2;
        padding: 10px;
    }

    .commentupper-div h1 {
        font-size: 10px;
        font-weight: 800;
        color: gray;
    }
    .cancel {
        cursor: pointer;
        transition: 0.5s;
    }

    .cancel:hover {
        transform: scale(1.5);
    }
    .commentcontent-div {
        grid-column: 2/3;
        grid-row: 2/3;
        padding: 10px;
    }
    .commentcontent-div h1 {
        font-size: 16px;
        font-weight: 800;
        color: black;
    }
    .commentname-div {
        background: rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-right: 2px solid #d4d4d4;
        grid-column: 1/2;
        grid-row: 1/3;
    }
    .commentname-div h1 {
        margin: 1rem;
        font-size: 13px;
        font-weight: 800;
        color: black;
    }

    @media screen and (max-width: 1200px) {
        .commentupper-div {
            grid-template-columns: 130px 1fr;
        }
    }
    @media screen and (max-width: 800px) {
        .commentupper-div {
            grid-template-columns: 130px 1fr;
        }
    }
</style>