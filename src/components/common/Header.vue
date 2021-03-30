<template>
    <div class="nav">
        <div class="container">
            <div class="logo">
                <router-link :to="{name:'Home'}">VUELOG</router-link>
            </div>
            <div v-if="getUsername.data !== null" >
                <div class="headerdiv">
                    <a v-if="getUsername.data !== null">{{ getUsername.data.user.username }}</a>
                </div>
                <div class="headerdiv">
                    <router-link :to="{ name:'Write' }">글쓰기</router-link>
                </div>
                <div class="headerdiv" @click="onLogout">
                    <a>로그아웃</a>
                </div>
            </div>
            <div v-else >
                <div class="headerdiv">
                    <router-link :to="{ name:'Register' }">회원가입</router-link>
                </div>
                <div class="headerdiv">
                    <router-link :to="{ name:'Login' }">로그인</router-link>
                </div>
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
export default class Header extends Vue {
  check!: any;
  public get getUsername(): string {
    return this.check;
  }
  onLogout() {
    this.$store.commit('LOGOUT')
  }
}

</script>
<style scoped>
    .headerdiv {
        font-size: 15px;
        display: inline-block;
    }
    .container {
        margin: 0 10px;
    }

    .nav {
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        transition: all 0.3s ease-in-out;
        z-index: 2;
    }
    .nav .logo {
        color: #fff;
        font-size: 20px;
        font-weight: 800;
        transition: all 0.3s ease-in-out;
    }
    .nav .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        transition: all 0.3s ease-in-out;
    }

    .nav ul {
        display: flex;
        list-style-type: none;
        align-items: center;
        justify-content: center;
    }

    .nav a {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        margin: 5px;
        font-weight: 800;
        transition: all 0.3s ease-in-out;
    }

    .nav.active {
        background-color: #222;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    .nav.active .container {
        padding: 10px 0;
    }

    .nav a.current,
    .nav a:hover {
        color: #78ffd6;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    .logout-button {
        background: linear-gradient(45deg, #8e2de2 30%, #4a00e0 90%);
        font-family: "Noto Sans KR", sans-serif;
        border: 0;
        border-radius: 2px;
        padding: 5px 10px;
        box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
        color: white;
        font-weight: 800;
        cursor: pointer;

        transition: all 0.2s ease-in-out;

    }
    .logout-button:hover {
        transform: scale(1.1);
    }
</style>