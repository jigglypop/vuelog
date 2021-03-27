<template>
    <div class="footer">
        <p>© 2019 ALL RIGHT RESERVED</p>
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
        position: fixed;
        bottom: 0;
    }
</style>