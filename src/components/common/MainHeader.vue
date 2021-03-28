<template>
    <div class="header">
        <div class="headeritem">
            <router-link :to="{name:'Home'}"><h4>홈</h4></router-link>
        </div>
        <div v-if="getUsername.data !== null" class="headeritems">
            <div class="headeritem">
                <h4 v-if="getUsername.data !== null">{{ getUsername.data.user.username }}</h4>
            </div>
            <div class="headeritem">
                <h4>로그아웃</h4>
            </div>
        </div>
        <div v-else class="headeritems">
            <div class="headeritem">
                <router-link :to="{name:'Register'}"><h4>회원가입</h4></router-link>
            </div>
            <div class="headeritem">
                <router-link :to="{name:'Login'}"><h4>로그인</h4></router-link>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: {
    ...mapState({
      check: 'check'
    }),
  },
})
export default class MainHeader extends Vue {

  check!: any;

  public get getUsername(): string {
    return this.check;
  }

}

</script>
<style scoped>
    a {
        margin: 10px;
    }
    .header {
        display: flex;
        justify-content: flex-end;
        text-align: center;
        align-items: center;
        align-content: center;
    }
    .headeritems {
        display: flex;
        justify-content: flex-end;
        text-align: center;
        align-items: center;
        align-content: center;
    }
    .headeritem {
        margin: 10px;
    }

</style>