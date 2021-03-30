<template>
    <div class="footer">
        <h4 class="footertext">© 2019 ALL RIGHT RESERVED</h4>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {

}

</script>
<style scoped>
    .footer {
        z-index:2;
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .footertext{
        color: #fff;
        font-size: 13px;
        font-weight: 800;
        transition: all 0.3s ease-in-out;
    }
</style>