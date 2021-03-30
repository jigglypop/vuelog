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
        width: 100%;
        z-index:2;
        background-color : #000000;
        position: fixed;
        bottom: 0;
    }
    .footertext{
        margin: 20px;
        font-size: 12px;
        font-weight: 800;
    }
</style>